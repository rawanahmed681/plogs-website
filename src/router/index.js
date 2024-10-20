import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/homeVue.vue'
import BlogVue from '../views/blogVue.vue'
import LoginPage from '../views/loginPage.vue'
import RegisterVue from '../views/registerVue.vue'
import SupportVue from '../views/supportVue.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {

      
      path: '/',
      name: 'Home',
      component: HomeVue
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogVue
    },
    {
      path: '/support',
      name: 'Support',
      component: SupportVue
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterVue
    }
    ,
  ]
})

export default router

