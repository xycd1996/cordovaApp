import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/home/home.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@views/detail/detail.vue')
    },
    {
      path: '/follow',
      name: 'follow',
      component: () => import('@views/follow-record/follow-record.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@views/contact/contact.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@views/project/project.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('@views/customer/customer.vue')
    }
  ]
})
