import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDiMczAIibWde1cfEY9qkGrP9VbYbEkF0",
  authDomain: "edu-fileserver-a6a6f.firebaseapp.com",
  projectId: "edu-fileserver-a6a6f",
  storageBucket: "edu-fileserver-a6a6f.appspot.com",
  messagingSenderId: "11095748549",
  appId: "1:11095748549:web:6ae96d32b3793ce7c465ac",
  measurementId: "G-L7XL14K62M"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();

export default storageRef;