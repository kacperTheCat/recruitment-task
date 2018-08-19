import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/store'
import Transactions from 'src/views/Wallet/WalletComponents/Transactions'
import Withdrawals from 'src/views/Wallet/WalletComponents/Withdrawals'
import Additions from 'src/views/Wallet/WalletComponents/Additions'
import Wallet from 'src/views/Wallet/Wallet'

Vue.use(Router)


const routes = [
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    children: [
      {
        path: '/transactions',
        name: 'transactions',
        component: Transactions,
      },
      {
        path: '/withdrawals',
        name: 'withdrawals',
        component: Withdrawals,
      },
      {
        path: '/additions',
        name: 'additions',
        component: Additions,
      }],
  },
  {
    path: '/',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "sign-in" */ 'src/views/SignIn'),
  },
]

const router = new Router({
  routes,
})

router.beforeEach((to, from, next) => {
  const { isLoggedIn } = store.state.auth
  if (isLoggedIn && to.name === 'SignIn') return next({ name: 'Wallet' })
  return next()
})

export default router
