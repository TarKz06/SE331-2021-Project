import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../views/detailsPage/Layout.vue"
import userInfo from "../views/detailsPage/userInfo.vue"
import vaccineInfo from "../views/detailsPage/vaccineInfo.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/details/:id',
    name: 'Layout',
    props: true,
    component: Layout,
    children: [
      {
        path: '',
        name: 'userInfo',
        component: userInfo
      },
      {
        path: 'vaccineInfo',
        name: 'vaccineInfo',
        props: true,
        component: vaccineInfo
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
