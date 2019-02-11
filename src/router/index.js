import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Player from '@/components/Player'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'App',
    //   component: App
    // },
    {
      path: '/player/:id',
      name:'player',
      component: Player,
      props: true,
    },
  ]
})
