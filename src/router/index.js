// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/create',
    name: 'CreatePoster',
    component: () => import('../views/CreatePosterPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/templates',
    name: 'Templates',
    component: () => import('../views/TemplatesPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
