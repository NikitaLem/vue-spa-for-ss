import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Player from '@/components/Player'
import GameIframe from '@/components/GameIframe'
import NewPlayer from '@/components/NewPlayer'

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

    {
      path: '/game/:id',
      name:'game',
      component: GameIframe,
      props: true,
    },

    {
      path: '/newPlayer',
      name:'newPlayer',
      component: NewPlayer,
      props: true,
    },
  ]
})
