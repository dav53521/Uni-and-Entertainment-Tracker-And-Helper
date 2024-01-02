import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/assignments',
      name: 'assignments',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Assignments.vue'),
    },
    {
      path: '/subjects',
      name: 'subjects',
      component: () => import('../views/Subjects.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('../views/Course.vue')
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: () => import('../views/Entertainment.vue')
    },
    {
      path: '/SubjectDetails',
      name: 'subject-details',
      component: () => import('../views/SubjectDetails.vue')
    },
    {
      path: '/Books',
      name: 'books',
      component: () => import('../views/Books.vue')
    }, 
    {
      path: '/Games',
      name: 'Games',
      component: () => import('../views/Games.vue')
    },
    {
      path: '/Music',
      name: 'Music',
      component: () => import('../views/Music.vue')
    },
    {
      path: '/Shows',
      name: 'Shows',
      component: () => import('../views/Shows.vue')
    }
  ]
})

export default router