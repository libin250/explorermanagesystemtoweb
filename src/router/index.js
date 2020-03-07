import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user/Login'
import index from '@/components/index'
import SaveUser from '@/components/user/SaveUser'

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
      path: '/SaveUser',
      name: 'SaveUser',
      component: SaveUser
    }
  ]
})
