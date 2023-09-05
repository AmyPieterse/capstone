import { createStore } from 'vuex'
import axios from 'axios'
// import { useCookies } from '@vueuse/integrations/useCookies'
// import authUser from '@/services/authenticate'


const apiLink = "https://capstone-i3ue.onrender.com"

export default createStore({
  state: {
    courses: null,
    addProduct: null,
    msg: null
  },
  getters: {
  },
  mutations: {
    setCourses(state,courses){
      state.courses= courses
    },
    setAddCourse(state, data){
      state.addCourse = data
    },
    updateCourse(state,{courseID, updatedCourse}){
      const index = state.courses.findIndex((course)=> course.id === courseID)
      if (index !== -1){
        Vue.set(state.courses, index, updatedCourse);
      }
    },
    deleteCourse(state, courseID){
      state.courses = state.courses.filter((course) => course.id !== courseID)
    },
    setMsg(state, value){
      state.msg = value
    },
  },
  actions: {
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
        const response = await axios.post(`${apiLink}/items`,courseData)
        context.commit('setAddCourse',response.data)
      }
      catch(error){
        context.commit("setMsg", "An error occured")
      }
    },
    async updateCourse(context,{courseID, courseData}){
      try{
        const response = await axios.put(`${apiLink}/item/${courseID}`,courseData)
        context.commit('updateCourse',{courseID, updatedCourse:response.data})
      }
      catch{
        context.commit("setMsg", "An error occured")
      }
    },
    async deleteCourse(context,courseID){
      try{
        await axios.delete(`${apiLink}/item/${courseID}`)
        context.commit('deleteCourse',courseID)
      }
      catch(error){
        context.commit("setMsg", "An error occured")
      }
    }
  },
  modules: {
  }
})
