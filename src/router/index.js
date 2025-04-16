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
    path: '/asea',
    name: 'ASEA distriutor',
    component: () => import('@/views/Asea-view.vue'),
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
    path: '/jobs',
    name: 'Work With Us',
    component: () => import('@/views/Jobs-view.vue'),
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
  {
    path: '/terms',
    name: 'Terms and Conditions',
    component: () => import('@/views/TermsAndConditions-view.vue'),
  },
  {
    path: '/cookies',
    name: 'Cookies Policy',
    component: () => import('@/views/CookiePolicy-view.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: () => import('@/views/PrivacyPolicy-view.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
