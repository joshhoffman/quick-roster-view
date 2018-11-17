import Vue from 'vue'
import Vuex from 'vuex'
import lodash from 'vue-lodash'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      roster: []
  },
  mutations: {
      addUnit(state, newUnit) {
          state.roster.push(Vue._.merge({}, newUnit, {key: state.roster.length}));
      }
  },
  actions: {
  }
})
