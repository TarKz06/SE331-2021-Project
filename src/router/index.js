import { createRouter, createWebHistory } from 'vue-router'
import PatientList from '../views/PatientList.vue'
import About from '../views/About.vue'

import Layout from '../views/detailsPage/Layout.vue'
import userInfo from '../views/detailsPage/userInfo.vue'
import vaccineInfo from '../views/detailsPage/vaccineInfo.vue'

const routes = [
  {
    path: '/',
    name: 'PatientList',
    component: PatientList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
