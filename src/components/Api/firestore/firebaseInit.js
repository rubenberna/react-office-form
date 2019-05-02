import firebase from 'firebase'
import firebaseConfig from './firesbaseConfig'
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

// Shortcuts for db collections
const offices = db.collection('offices')

export default {
  db,
  offices
}