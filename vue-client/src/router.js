import Vue from 'vue'
import Router from 'vue-router'
import Builder from './views/Builder.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Builder',
      component: Builder
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue')
    }
  ]
});
