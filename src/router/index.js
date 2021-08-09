import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/detailsPage/Layout.vue"
import userInfo from "../views/detailsPage/userInfo.vue"
import vaccineInfo from "../views/detailsPage/vaccineInfo.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
