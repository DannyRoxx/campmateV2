import * as firebase from 'firebase/app';
import 'firebase/firebase-firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2X-sadb3esU9RhZFe7uQ3heeMJ3WLCGg",
    authDomain: "camp-mate.firebaseapp.com",
    databaseURL: "https://camp-mate.firebaseio.com",
    projectId: "camp-mate",
    storageBucket: "camp-mate.appspot.com",
    messagingSenderId: "753519082929",
    appId: "1:753519082929:web:6ea5a915825f269d65d190"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export { db }