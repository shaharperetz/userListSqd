import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})
