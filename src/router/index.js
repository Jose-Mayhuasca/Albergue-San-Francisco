import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/WebSite/HomePage.vue'
import AppLayout from '@/layout/WebSite/AppLayout.vue'
import LoginPage from '@/pages/WebSite/LoginPage.vue'
import CatalogPage from '@/pages/WebSite/CatalogPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          component: HomePage,
        },
        {
          path: '/catalogo',
          component: CatalogPage,
        },
        {
          path: '/login',
          component: LoginPage,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
