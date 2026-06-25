import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
    path: '/Transactions',
    name: 'Transactions',
    component: () => import('../views/Transactions.vue')
    },
    {
      path: '/TransactionsDetails',
      name: 'TransactionsDetails',
      component: () => import ('../views/TransactionsDetails.vue')
    }
  ],
})

export default router
