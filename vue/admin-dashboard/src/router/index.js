import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login'
import Register from '../views/register/register'
import Resource from '../views/resource/resource'
import Dashboard from '../views/dashboard/dashboard'
import Role from '../views/role/role'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'resource',
          name: 'Resource',
          component: Resource
        },
        {
          path: 'role',
          name: 'Role',
          component: Role
        }
      ]
    }
  ]
})
