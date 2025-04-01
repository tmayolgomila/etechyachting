import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home-view.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About-view.vue'),
  },
  {
    path: '/bluewave',
    name: 'BLUEWAVE',
    component: () => import('@/views/Bluewave-view.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/Services-view.vue'),
  },
  {
    path: '/references',
    name: 'Our References',
    component: () => import('@/views/References-view.vue'),
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import('@/views/Partners-view.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact-view.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Esto asegura que cada vez que cambias de ruta, empieza desde arriba
    return { top: 0 }
  },
})

export default router
