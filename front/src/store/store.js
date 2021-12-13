import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    sesion: {
      email: null,
      name: null,
      dateOfBirth: null,
      nickName: null,
      token: null
    }
  }
})