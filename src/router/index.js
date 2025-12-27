import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('../views/CollectionView.vue')
    },
    {
      path: '/dining',
      name: 'dining',
      component: () => import('../views/DiningView.vue')
    },
    {
      path: '/wellness',
      name: 'wellness',
      component: () => import('../views/WellnessView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 50 
          })
        }, 100) 
      })
    }

    return { top: 0 }
  }
})

export default router   