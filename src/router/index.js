import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from 'components/home'
import car from 'components/game_car'
import mix from 'components/mix'
import clear from 'components/clear'
import puzzle from 'components/puzzle'
import kindly from 'components/kindly'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/game_car',
      name: 'car',
      component: car
	},
  {
      path: '/mix',
      name: 'mix',
      component: mix

  },
  {
    path: '/clear',
    name: 'clear',
    component: clear

    },
  {
      path: '/puzzle',
      name: 'puzzle',
      component: puzzle
    },
  {
    path: '/kindly',
      name: 'kindly',
      component: kindly

  }
  ]
})
