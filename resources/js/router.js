import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/js/components/Home.vue'
import Test from '@/js/components/Test.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
