import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CurrentDiagnosis from '../views/CurrentDiagnosis.vue'
import DiagnosisHistory from '../views/DiagnosisHistory.vue'
import SearchDiagnosis from '../views/SearchDiagnosis.vue'
import SurveyDiagnosis from '../views/SurveyDiagnosis.vue'
import Login from '../views/Auth/Login.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/currentDiagnosis',
      name: 'CurrentDiagnosis',
      component: CurrentDiagnosis
    },
    {
      path: '/diagnosisHistory',
      name: 'DiagnosisHistory',
      component: DiagnosisHistory
    },
    {
      path: '/searchDiagnosis',
      name: 'SearchDiagnosis',
      component: SearchDiagnosis
    },
    {
      path: '/surveyDiagnosis',
      name: 'SurveyDiagnosis',
      component: SurveyDiagnosis
    },
    {
      path: '/:catchAll(.*)',
      name: NotFound,
      component: NotFound
    }
  ]
})

export default router
