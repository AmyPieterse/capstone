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
    cart: [],
    orders: null,
  },
  getters: {
    userRole(state){
      return state.user ? state.user.role : null
    }
  },
  mutations: {
    setCourses(state,courses){
      state.courses= courses
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
      state.msg= value
    },
    addCart(state, course){
      state.cart.push(course)
    },
    deleteCart(state, index){
      state.cart.splice(index, 1)
    },
    completeOrder(state, order){
      state.orders.push(order)
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
    async fetchCourses(context){
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
    async updateCourse(context,{courseID, courseData}){
      try{
        const response= await axios.put(`${apiLink}/item/${courseID}`,courseData)
        location.reload()
        context.commit('updateCourse',{courseID, updatedCourse:response.data})
      }
      catch{
        context.commit("setMsg", "An error occured")
      }
    },
    async deleteCourse(context,courseID){
      try{
        await axios.delete(`${apiLink}/item/${courseID}`)
        location.reload()
        context.commit('deleteCourse',courseID)
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
          const userWithRole = {...result, role: result?.role, msg}
          context.commit("setUser", userWithRole)
          cookies.set("ValidUser",{ msg, token, result })
          authenticate.applyToken(token)
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "home" });
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
      } catch (error) {
        context.commit("setMsg","An error has occured")
      }
    },
    createOrder({ commit, state }) {
      const order = {
        courses: state.cart.slice(),
      }
      commit('createOrder', order)
      commit('clearCart')
    },
  },
  modules: {
  }
})
