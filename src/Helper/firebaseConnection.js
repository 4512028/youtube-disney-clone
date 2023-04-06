// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDct8kL1dpdxaLQIx2--lj1p1XavLcG6ak",
  authDomain: "disney-c37e6.firebaseapp.com",
  projectId: "disney-c37e6",
  storageBucket: "disney-c37e6.appspot.com",
  messagingSenderId: "710197011293",
  appId: "1:710197011293:web:787d16ab5b27425cf97eb4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
