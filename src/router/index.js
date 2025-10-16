import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/WebSite/AppLayout.vue'
import HomePage from '@/pages/WebSite/HomePage.vue'
import CatalogPage from '@/pages/WebSite/CatalogPage.vue'
import LoginPage from '@/pages/WebSite/LoginPage.vue'
import AppLayout_s from '@/layout/System/AppLayout_s.vue'
import HomePage_s from '@/pages/System/HomePage_s.vue'
import CatalogPage_s from '@/pages/System/Catalogpage_s.vue'
import ApplicantsPage_s from '@/pages/System/ApplicantsPage_s.vue'
import DogApplicantsList from '@/components/System/ApplicantsSections/DogApplicantsList.vue'
import ApplicantDetail from '@/components/System/ApplicantsSections/ApplicantDetail.vue'
import PreselectedApplicants from '@/components/System/ApplicantsSections/PreselectedApplicants.vue'
import PreselectedApplicantDetail from '@/components/System/ApplicantsSections/PreselectedApplicantDetail.vue'

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
          path: 'catalogo',
          component: CatalogPage,
        },
        {
          path: 'login',
          component: LoginPage,
        },
      ],
    },
    {
      path: '/admin',
      component: AppLayout_s,
      children: [
        {
          path: '',
          component: HomePage_s,
        },
        {
          path: 'catalogo',
          component: CatalogPage_s,
        },
        {
          path: 'solicitudes',
          component: ApplicantsPage_s,
        },
        {
          path: 'solicitudes/id',
          component: DogApplicantsList,
        },
        {
          path: 'solicitudes/id/detalle/detailId',
          component: ApplicantDetail,
        },
        {
          path: 'solicitudes/pre-aprobadas',
          component: PreselectedApplicants,
        },
        {
          path: 'solicitudes/pre-aprobadas/detalle/id',
          component: PreselectedApplicantDetail,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
