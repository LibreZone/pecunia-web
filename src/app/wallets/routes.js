const Wallets = (r) => require.ensure([], () => r(require('./components/Wallets')), 'wallets-bundle')
const WalletDetails = (r) => require.ensure([], () => r(require('./components/WalletDetails')), 'wallets-bundle')

export default [
  {
    name: 'wallets',
    path: '/wallets',
    component: Wallets
  },
  {
    name: 'wallet-details',
    path: '/wallets/:id',
    component: WalletDetails
  }
]
