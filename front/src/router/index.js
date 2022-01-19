import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'Registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/exercise',
    name: 'Feed',
    component: () => import('../views/feed.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  // Estos Nombres deberan ser dinamicos
  {
    path: '/Usuario',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/Profile/:nickName',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
