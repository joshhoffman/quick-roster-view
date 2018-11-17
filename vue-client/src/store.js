import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      roster: [],
      units: [],
      weapons: []
  },
  mutations: {
      addUnit(state, newUnit) {
          state.roster.push(Vue._.merge({}, newUnit, {rosterId: state.roster.length, assignedWeapons: []}));
      },
      setUnits(state, units) {
          state.units = units;
      },
      setWeapons(state, weapons) {
          state.weapons = weapons;
      }
  },
  actions: {
  }
})
