import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user/Login'
import index from '@/components/index'
import User from '@/components/user/User'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
