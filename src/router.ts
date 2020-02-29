import Vue from 'vue'
import Router from 'vue-router'
// import store, { ProductStore, UserStore } from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/dev',
      name: 'Develop',
      component: () => import('@/views/DeveloperPage/DeveloperPage.vue'),
    },
  ],
})

/*const waitForStorageToBeReady = async (to, from, next) => {
  next()
}
router.beforeEach(waitForStorageToBeReady)*/

export default router
