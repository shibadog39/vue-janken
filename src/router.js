import Vue from 'vue'
import VueRouter from 'vue-router'

import Fight from "./components/Fight.vue";
import Score from "./components/Score.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: Fight},
    {path: '/scores', component: Score}
  ]
})

export default router
