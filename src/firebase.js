import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBCaRTKLZxzEGeH75V_oi68I67UExjX9LA",
    authDomain: "image-uploader-nyk.firebaseapp.com",
    projectId: "image-uploader-nyk",
    storageBucket: "image-uploader-nyk.appspot.com",
    messagingSenderId: "276971901234",
    appId: "1:276971901234:web:664b4418d2262f007e072b"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();


export { db, storage };