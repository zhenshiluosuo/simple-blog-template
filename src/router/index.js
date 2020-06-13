import Vue from 'vue'
import VueRouter from 'vue-router'
import Browse from "../components/Browse";
import Article from "../components/Article";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/edit',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Edit.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
