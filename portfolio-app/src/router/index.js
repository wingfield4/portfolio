import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import Clio from '@/components/pages/projects/Clio'
import DataWarehouse from '@/components/pages/projects/DataWarehouse'
import EasyAllies from '@/components/pages/projects/EasyAllies'
import Portfolio from '@/components/pages/projects/Portfolio'
import DDDesigns from '@/components/pages/projects/DDDesigns'
import HeritageQuest from '@/components/pages/projects/HeritageQuest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/projects/clio',
      name: 'clio',
      component: Clio,
      props: true
    },
    {
      path: '/projects/mh-data-warehouse',
      name: 'data-warehouse',
      component: DataWarehouse,
      props: true
    },
    {
      path: '/projects/portfolio',
      name: 'portfolio',
      component: Portfolio,
      props: true
    },
    {
      path: '/projects/dddesigns',
      name: 'dddesigns',
      component: DDDesigns,
      props: true
    },
    {
      path: '/projects/heritage-quest',
      name: 'heritage-quest',
      component: HeritageQuest,
      props: true
    },
    {
      path: '/projects/easy-allies',
      name: 'easy-allies',
      component: EasyAllies,
      props: true
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    }
  ]
})