import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCToIoZttYVFce6kT_-FTbcVh_dvY8ZetQ",
  authDomain: "miniprojectecommerce.firebaseapp.com",
  projectId: "miniprojectecommerce",
  storageBucket: "miniprojectecommerce.appspot.com",
  messagingSenderId: "1040611756032",
  appId: "1:1040611756032:web:9f8145cb7b13538f8bf0e5",
  measurementId: "G-16XTFJRP10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };