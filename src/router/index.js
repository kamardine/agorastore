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
      path: '/people',
      name: 'people',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PeopleView.vue')
    },
    {
      path: '/products',
      name: 'products',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CategoriesView.vue')
    }
  ]
})

export default router
