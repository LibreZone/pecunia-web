const Transactions = (r) => require.ensure([], () => r(require('./components/Transactions')), 'transactions-bundle')

export default [
  {
    name: 'transactions',
    path: '/transactions',
    component: Transactions
  }
]
