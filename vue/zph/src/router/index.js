import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/views/Category'
import Index from '@/views/Index'
import ShoppingCart from '@/views/ShoppingCart'
import UserInfo from '@/views/UserInfo'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '',
          redirect: '/homePage/index'
        },
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'category',
          name: 'Category',
          component: Category
        },
        {
          path: 'shoppingCart',
          name: 'ShoppingCart',
          component: ShoppingCart
        },
        {
          path: 'userInfo',
          name: 'UserInfo',
          component: UserInfo
        }
      ]
    }
  ]
})
