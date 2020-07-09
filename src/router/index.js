/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'

import AppLayout from '@/layouts/components/Main/Index'
import ExampleIndex from '@/components/example/Index'
import ExampleView from '@/components/example/View'
import SalesIndex from '@/components/sales/sucursal/Index'
import SalesCreateOrUpdate from '@/components/sales/sucursal/CreateOrUpdate'
import AccountsReceivableIndex from '@/components/accounts/receivable/Index'
import AccountsPayIndex from '@/components/accounts/pay/Index'
import AccountsGeneralIndex from '@/components/accounts/general/Index'
import UserIndex from '@/components/user/Index'
import UserCreateOrUpdate from '@/components/user/CreateOrUpdate'
import LoginIndex from '@/components/login/Index'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
      { path: '/', name: 'Default', component: AppLayout },
      { path: '/example', name: 'ExampleIndex', component: ExampleIndex },
      { path: '/example/:id', name: 'ExampleView', component: ExampleView },
      { path: '/sales', name: 'SalesIndex', component: SalesIndex },
      { path: '/sales/add', name: 'SalesCreate', component: SalesCreateOrUpdate },
      { path: '/sales/:id/edit', name: 'SalesEdit', component: SalesCreateOrUpdate },
      { path: '/accountsReceivable', name: 'AccountsReceivableIndex', component: AccountsReceivableIndex },
      { path: '/accountsPay', name: 'AccountsPayIndex', component: AccountsPayIndex },    
      { path: '/accountsGeneral', name: 'AccountsGeneralIndex', component: AccountsGeneralIndex },
      { path: '/user/', name: 'UserIndex', component: UserIndex },
      { path: '/user/add', name: 'UserCreate', component: UserCreateOrUpdate },
      { path: '/user/:id/edit', name: 'UserEdit', component: UserCreateOrUpdate },
      { path: '/login', name: 'LoginIndex', component: LoginIndex }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})
