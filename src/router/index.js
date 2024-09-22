import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import FindJobView from '../views/Job/JobView.vue'
import AboutView from '../views/About/AboutView.vue'
import ContactView from '../views/Contact/ContactView.vue'
import JobDetailView from '../views/Job/JobDetailView.vue'
import BlogView from  '../views/Blog/BlogView.vue'
import BlogDetailView from '../views/Blog/BlogDetailView.vue'

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
      name: 'findJob',
      component: FindJobView
    }, 

    {
      path: '/about',
      name: 'about',
      component: AboutView
    }, 

    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    
    {
      path: '/job-detail',
      name: 'jobDetail',
      component: JobDetailView
    }, 

    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },

    {
      path: '/blog-detail',
      name: 'blogDetail',
      component: BlogDetailView
    }, 
  ]
})

export default router
