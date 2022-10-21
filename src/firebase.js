import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyC-HgVJraBZ1GB4fdXeCY5KlOkT9OrPFSU",
  authDomain: "signal-ba574.firebaseapp.com",
  projectId: "signal-ba574",
  storageBucket: "signal-ba574.appspot.com",
  messagingSenderId: "707248239939",
  appId: "1:707248239939:web:fe0f95736f236b36862bf6",
  measurementId: "G-89678MSZDK",
};
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

console.log(app, "app");
