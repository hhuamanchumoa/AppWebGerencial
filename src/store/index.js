import Vue from 'vue'
import Vuex from 'Vuex'
import services from './services'

import { alert } from './alert.module'
import { account } from './account.module'
import { users } from './user.module'

Vue.use(Vuex)

const state = {
  services,
  alert,
  account,
  users
}

export default new Vuex.Store({
  state
})
