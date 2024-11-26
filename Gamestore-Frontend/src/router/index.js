import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'; // Import the SignIn View

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hello',
      name: 'home',
      component: HomeView,
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignInView, // Route for the SignIn View
      },
    {
      path: '/',
      name: 'games',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GamesView.vue'),
    },
  ],
})

export default router
