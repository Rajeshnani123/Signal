import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArXH-60coIyi67ZqFUwPAaNt2SEO6g6BE",
  authDomain: "signal-clone-b9525.firebaseapp.com",
  databaseURL: "https://signal-clone-b9525.firebaseio.com",
  projectId: "signal-clone-b9525",
  storageBucket: "signal-clone-b9525.appspot.com",
  messagingSenderId: "800074234112",
  appId: "1:800074234112:android:2a2a07e4e6b248b9dd9be5",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth, firebaseConfig };
