import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/main',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
