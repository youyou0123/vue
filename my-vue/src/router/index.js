import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
// click事件延迟问题解决方案
import fastClick from 'fastclick'

Vue.use(Router)
// 使用fastClick
fastClick.attach(document.body)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
