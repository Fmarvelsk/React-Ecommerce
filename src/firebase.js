import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBViAtXZ05cxrqMSsn1-LtC45LydvcSDsQ",
    authDomain: "ecommerce-62924.firebaseapp.com",
    databaseURL: "https://ecommerce-62924.firebaseio.com",
    projectId: "ecommerce-62924",
    storageBucket: "ecommerce-62924.appspot.com",
    messagingSenderId: "898114422532",
    appId: "1:898114422532:web:3719df8a0c86c6dc033251",
    measurementId: "G-QLEQW55Z0K"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database()
const auth = firebase.auth()

export {db, auth};

