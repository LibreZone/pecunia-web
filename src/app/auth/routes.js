const Login = (r) => require.ensure([], () => r(require('./components/Login')), 'auth-bundle')

export default [
  {
    name: 'auth.login',
    path: '/auth/login',
    component: Login
  }
]
