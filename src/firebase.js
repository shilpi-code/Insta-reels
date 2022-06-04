import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArX1BkKxsaMzk4EodX83DPBqZBEq0utKo",
  authDomain: "insta-reels-ad225.firebaseapp.com",
  projectId: "insta-reels-ad225",
  storageBucket: "insta-reels-ad225.appspot.com",
  messagingSenderId: "634765681806",
  appId: "1:634765681806:web:ad8fe58415d47f6a0e55df"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()