import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyCInC7n13UbBQB1OeH15j14PmiE8BH4Qt0",
    authDomain: "kivlic-assignment.firebaseapp.com",
    projectId: "kivlic-assignment",
    storageBucket: "kivlic-assignment.appspot.com",
    messagingSenderId: "1024667055241",
    appId: "1:1024667055241:web:e834c689a74548e61f0258",
    measurementId: "G-5MZBXZ7DQP"
  };

export const Firebase = firebase.initializeApp(firebaseConfig)