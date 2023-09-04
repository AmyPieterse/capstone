import { createStore } from 'vuex'
const apiLink = ("")

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
  },
  modules: {
  }
})
