import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const CHAHGE_STATE = 'change_state'

export default new Vuex.Store({
  state: {
    testState: 1
  },
  getters: {
    testState: state => state.testState
  },
  mutations: {
    [CHAHGE_STATE] (state) {
      state.testState = 2
    }
  },
  actions: {}
})
