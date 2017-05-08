import { routes as auth } from './auth'
import { routes as overview } from './overview'
import { routes as transactions } from './transactions'
import { routes as wallets } from './wallets'

const defaultComponent = { name: '404', template: '<div>404 not found</div>' }
const defaultRoute = [
  { name: 'index', path: '/', redirect: { name: 'overview' } },
  { name: 'default', path: '/*', component: defaultComponent }
]

export default [
  ...auth,
  ...overview,
  ...transactions,
  ...wallets,
  ...defaultRoute
]
