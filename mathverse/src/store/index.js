import { createStore } from 'vuex'
import axios from 'axios'

const apiLink = "https://capstone-i3ue.onrender.com"

export default createStore({
  state: {
    courses: null
  },
  getters: {
  },
  mutations: {
    setCourses(state,courses){
      state.courses= courses
    }
  },
  actions: {
    async fetchCourses(context){
      try {
        const {data} = await axios.get(`${apiLink}/items`);
        context.commit('setCourses', data.results)
        }
      catch (e){
        context.commit("","")
      }
    }
  },
  modules: {
  }
})
