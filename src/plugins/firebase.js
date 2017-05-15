import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyB6WjiaOn9UCQ7NLgb5P8GEyhVQnoav-Us',
  authDomain: 'pecunia-web.firebaseapp.com',
  databaseURL: 'https://pecunia-web.firebaseio.com',
  projectId: 'pecunia-web',
  storageBucket: 'pecunia-web.appspot.com',
  messagingSenderId: '693540206441'
}

const firebase = Firebase.initializeApp(config)

const DB = firebase.database()
const AUTH = firebase.auth()

export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
    $db: {
      get () {
        return DB
      }
    },
    $auth: {
      get () {
        return AUTH
      }
    }
  })
}
