import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUc46Lc4W8EMd3G9DBAR0UwF-fbcXR5dc",
    authDomain: "snapchat-clone-a87f8.firebaseapp.com",
    projectId: "snapchat-clone-a87f8",
    storageBucket: "snapchat-clone-a87f8.appspot.com",
    messagingSenderId: "245657118534",
    appId: "1:245657118534:web:17bd5e5dd7795198a82747"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };