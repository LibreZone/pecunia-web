import store from '@/store'

const isLogged = store.state.Auth.isLogged

const beforeEach = (to, from, next) => {
  if (!isLogged && to.name !== 'auth.login') {
    return next({ name: 'auth.login' })
  }

  return next()
}

export default beforeEach
