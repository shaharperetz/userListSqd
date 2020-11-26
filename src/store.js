import Vue from 'vue'
import Vuex from 'vuex'

import UserStore from './modules/UserStore.js'
import ProductsStore from './modules/ProductsStore.js'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    UserStore,
    ProductsStore

  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
