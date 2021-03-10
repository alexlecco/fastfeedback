import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

/*
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}
*/

const config = {
  apiKey: 'AIzaSyAz3Y5KrT2MreKSiuUh3vnWhhc4kSCKsBE',
  authDomain: 'test-app-161f0.firebaseapp.com',
  projectId: 'test-app-161f0'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;