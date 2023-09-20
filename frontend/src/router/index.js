import { createRouter, createWebHistory } from 'vue-router'
import testVue from '../views/test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: testVue
    }
  ]
})

export default router
