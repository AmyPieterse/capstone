import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'
import router from '@/router'
import authenticate from '@/services/authenticate'
import sweet from 'sweetalert'

const {cookies} = useCookies()

const apiLink = "https://capstone-i3ue.onrender.com"

export default createStore({
  state: {
    user:null,
    users:null,
    courses: null,
    addProduct: null,
    msg: null,
    cart: null,
    userOrders: null,
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getMsg(state) {
      return state.msg
    },
    userRole(state){
      return state.user ? state.user.role : null
    }
  },
  mutations: {
    setCourses(state,courses){
      state.courses= courses
    },
    setCourse(state, course) {
      state.course = course;
    },
    setUsers(state, users){
      state.users = users
    },
    setUser(state, user){
      state.user = user
    },
    setAddCourse(state, data){
      state.addCourse = data
    },
    updateCourse(state,{courseID, updatedCourse}){
      const index= state.courses.findIndex((course)=>course.id === courseID)
      if (index!==-1){
        state.courses[index] =updatedCourse
      }
    },
    deleteCourse(state, courseID){
      state.courses= state.courses.filter((course)=>course.id !== courseID)
    },
    setMsg(state, value){
      state.msg = value
    },
    addCart(state, course){
      state.cart.push(course)
    },
    deleteCart(state, index){
      state.cart.splice(index, 1)
    },
    setUserOrders(state, orders){
      state.userOrders = orders
    },
  },
  actions: {
    async fetchUsers(context) {
      try{
        const {data}= await axios.get(`${apiLink}/users`)
        context.commit('setUsers', data.results)
      } 
      catch(error){
        console.error(error)
      }
    },
    async fetchUser(context, userID){
      try {
        const {data} = await axios.get(`${apiLink}/users/${userID}`)
        context.commit('setUser', data)
      } catch (error) {
        console.error(error)
        context.commit('setMsg', 'An error occurred while fetching the user')
      }
    },
    async updateUser(context, userData) {
      try {
        const response = await axios.patch(`${apiLink}/users/${userData.userID}`, userData)
        context.commit('setUser', response.data)
      } catch (error) {
        context.commit('setMsg', 'An error occurred while updating the user profile.')
      }
    },
    async deleteUser(context, userID) {
      try {
        await axios.delete(`${apiLink}/users/${userID}`)
        context.commit('setUser', null)
      } catch (error) {
        context.commit('setMsg', 'An error occurred while deleting the user profile.')
      }
    },
    async fetchCourse(context, courseID){
      try {
        const {data} = await axios.get(`${apiLink}/item/${courseID}`)
        context.commit('setCourse', data)
      } catch (error){
        console.error(error)
        context.commit('setMsg', 'An error occurred while fetching the course')
      }
    },
    async fetchCourses(context) {
      try {
        const {data} = await axios.get(`${apiLink}/items`);
        context.commit('setCourses', data.results)
        }
      catch (error){
        console.log(error)
      }
    },
    async addCourse(context,courseData){
      try{
        const response= await axios.post(`${apiLink}/items`,courseData)
        location.reload()
        context.commit('setAddCourse',response.data)
      }
      catch(error){
        context.commit("setMsg", "An error occured")
      }
    },
    
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${apiLink}/login`, payload)).data
        if (result) {
          context.commit("setUser", result)
          cookies.set("ValidUser",{ msg, token, result })
          authenticate.applyToken(token)
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 4000,
          });
          router.push({name: "home"});
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured")
      }
    },
    async register(context,payload){
      try {
        const {msg} = (await axios.post(`${apiLink}/register`, payload)).data
          if (msg){
            sweet(
              {
                title:"Registration",
                text:msg,
                icon:"success",
                timer:5000,
              }
            )
          context.dispatch("fetchUsers")
          router.push({name:"login"})
          }
          else{
            sweet(
              {
                title:"Error",
                text:msg,
                icon:"error",
                timer: 5000
              }
            )
          }
      }
      catch (error){
        context.commit("setMsg","An error has occured")
      }
    },
    async createOrder(context, course){
      try{
        const orderData={
          userID: context.state.user.userID, 
          courseID: course.courseID,
          status: 'pending',
        }
        const response = await axios.post(`${apiLink}/orders`, orderData)
        const pendingOrder = response.data
        context.commit('addCart', pendingOrder)
      }
      catch(error){
        console.error(error)
      }
    },
    async fetchUserOrders(context) {
      try {
        const userID = context.state.user ? context.state.user.userID : cookies.get("ValidUser")?.result?.userID;
    
        if (userID) {
          const response = await axios.get(`${apiLink}/user/${userID}/carts`)
          const userOrders = response.data.results
          context.commit('setUserOrders', userOrders)
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {
  }
})
