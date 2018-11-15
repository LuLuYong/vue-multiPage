import Vue from 'vue'
import Router from 'vue-router'
import Test1 from '../pages/test1/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    }
  ]
})
