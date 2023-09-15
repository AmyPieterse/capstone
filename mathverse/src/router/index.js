import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import store from '@/store'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/AllItems.vue')
  },
  {
    path: '/single/:courseId',
    name: 'single',
    component: () => import('../views/SingleItem.vue'),
    props: true  
  },
  {
    path: '/loginAsAdmin',
    name: 'loginAsAdmin',
    component: () => import('../components/LoginAsAdmin.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfilePage.vue'),
  },
  {
    path: '/manageProfile',
    name: 'manageProfile',
    component: () => import('../views/ManageProfile.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/ManageItems.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  next()
})

export default router
