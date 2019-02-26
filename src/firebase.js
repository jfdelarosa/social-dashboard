import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyBWz6cbSDO0SVk3FZAh-g3U52boGyPNAKo",
  authDomain: "qp-social-dashboard.firebaseapp.com",
  databaseURL: "https://qp-social-dashboard.firebaseio.com",
  projectId: "qp-social-dashboard",
  storageBucket: "qp-social-dashboard.appspot.com",
  messagingSenderId: "852878284719"
})

export default firebase