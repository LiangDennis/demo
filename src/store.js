import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{
      nickname:'helloworld'
    }
  },
  mutations: {
    changeNickname(state) {
      if(state.userinfo.nickname === "helloworld") {
        state.userinfo.nickname = "你好";
      }else {
        state.userinfo.nickname = "helloworld";
      }
    }
  },
  actions: {

  }
})
