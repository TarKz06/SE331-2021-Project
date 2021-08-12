import { createRouter, createWebHistory } from 'vue-router'
import PatientList from '../views/PatientList.vue'
import About from '../views/About.vue'

import Layout from '../views/detailsPage/Layout.vue'
import userInfo from '../views/detailsPage/userInfo.vue'
import vaccineInfo from '../views/detailsPage/vaccineInfo.vue'
import doctorComment from '../views/detailsPage/doctorComment.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'

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
        props: true,
        component: userInfo
      },
      {
        path: 'vaccineInfo',
        name: 'vaccineInfo',
        props: true,
        component: vaccineInfo
      },
      {
        path: 'doctorComment',
        name: 'doctorComment',
        props: true,
        component: doctorComment
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
