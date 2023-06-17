import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import AccountProfile from '../views/AccountProfile.vue'
import Links from '../views/Links.vue'
import DesignPage from '../views/DesignPage.vue'
import Share from '../views/Share.vue'
import Preview from '../views/Preview.vue'
import Protfolio from '../views/Protfolio.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import ActivateAcouunt from '../views/ActivateAcouunt.vue'
import _404page from '../views/_404page.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/AccountProfile',
    name: 'AccountProfile',
    component: AccountProfile
  },
  {
    path: '/Links',
    name: 'Links',
    component: Links
  },
  {
    path: '/Design',
    name: 'Design',
    component: DesignPage
  },
  {
    path: '/Share',
    name: 'Share',
    component: Share
  },
  {
    path: '/Preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: `/:Protfolio`,
    name: 'Protfolio',
    component: Protfolio
  },
  {
    path: `/ForgotPassword`,
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: `/activate-acouunt/:token`,
    name: 'ActivateAcouunt',
    component: ActivateAcouunt
  },

  { 
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: _404page 
  },
  { 
    path: '/NotFound',
    name: 'NotFoundd',
    component: _404page 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
