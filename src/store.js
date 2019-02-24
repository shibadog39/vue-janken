import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import Storage from "./util/Storage";

Vue.use(Vuex)
let storage = new Storage();

const store = new Vuex.Store({
  state: {
    scores: storage.getData("scores") || []
  },
  getters: {
    scores(state){
      return state.scores;
    }
  },
  mutations: {
    updateScores(state, payload){
      state.scores = payload;
      storage.setData("scores", state.scores);
    }
  }
})
export default store
