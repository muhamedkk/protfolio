import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import AccountProfile from '../views/AccountProfile.vue'
import Links from '../views/Links.vue'
import DesignPage from '../views/DesignPage.vue'
import Share from '../views/Share.vue'
import Preview from '../views/Preview.vue'

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
    path: '/x',
    name: 'home',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
