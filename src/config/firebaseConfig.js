// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAII8YcUu_s7AjgY7Z66sIAvyw5O8Ul5pQ",
  authDomain: "serverfirebaseexo.firebaseapp.com",
  databaseURL: "https://serverfirebaseexo-default-rtdb.firebaseio.com",
  projectId: "serverfirebaseexo",
  storageBucket: "serverfirebaseexo.appspot.com",
  messagingSenderId: "183502347702",
  appId: "1:183502347702:web:d3f8b3e67736fad46ab517"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const authentification = getAuth(app);