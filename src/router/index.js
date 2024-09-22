import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import FindJobView from '../views/Job/FindJobView.vue'
import AboutView from '../views/About/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 

    {
      path: '/job-list',
      name: 'find-job',
      component: FindJobView
    }, 

    {
      path: '/about',
      name: 'about',
      component: AboutView
    }, 
  ]
})

export default router
