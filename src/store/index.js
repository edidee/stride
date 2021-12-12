import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: null,
      monoid: 0,
      account: [],
      statement: []
    }
  },
  mutations: {
    setid(state, payload) {
      state.monoid = payload;
    },
    setaccount(state, payload) {
      state.account = payload;
    },
    setstatement(state, payload) {
      state.statement = payload;
    },
  }
})

export default store