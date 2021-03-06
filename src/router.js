import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
alert(process.env.BASE_URL);
console.log(process.env.BASE_URL);
// process.env.BASE_URL = '/views'
console.log(process.env.BASE_URL);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('./views/Other.vue')
    },
    {
      path: '/',
      name: 'DemoIndex',
      component: () => import('./demo/index.vue')
    }
  ]
})
