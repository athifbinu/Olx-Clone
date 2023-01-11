import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBvd7m4jiqFzsvpIROibd_EIwXiOmv8498",
    authDomain: "olx-clone-7b75d.firebaseapp.com",
    projectId: "olx-clone-7b75d",
    storageBucket: "olx-clone-7b75d.appspot.com",
    messagingSenderId: "263355816183",
    appId: "1:263355816183:web:4275116be7deb10d255bf2"
  };

export  default firebase.initializeApp(firebaseConfig)



