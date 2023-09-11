import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import store from '@/store';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function Admin(){
  const user= getUser()
  return user && user.role==='admin'
}

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAdmin){
    if (Admin()){
      next()
    }
    else{
      next({name:'registerAsAdmin'})
    }
    next()
  }
})

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
    meta:{
      requiresAdmin:false
    }
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
    path: '/registerAsAdmin',
    name: 'registerAsAdmin',
    component: () => import('../components/RegisterAsAdmin.vue')
  },
  {
    path: '/registerAsLearner',
    name: 'registerAsLearner',
    component: () => import('../components/RegisterAsLearner.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfilePage.vue'),
    meta:{
      requiresAdmin:false
    }
  },
  {
    path: '/manageProfile',
    name: 'manageProfile',
    component: () => import('../views/ManageProfile.vue'),
    meta:{
      requiresAdmin:false
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/ManageItems.vue'),
    meta: {
      requiresAdmin:true,
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      requiresAdmin:false,
    }
  }
]



export default router
