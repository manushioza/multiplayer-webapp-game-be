// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// const { getAnalytics } =  require("firebase/analytics");
const { getFirestore, where, query, collection, getDocs, setDoc, doc, getDoc, addDoc } = require('firebase/firestore/lite')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChb3uPMOAVpPE0LNYAYLsK1-oT94cFtmk",
  authDomain: "multiplayer-webapp-game.firebaseapp.com",
  projectId: "multiplayer-webapp-game",
  storageBucket: "multiplayer-webapp-game.appspot.com",
  messagingSenderId: "494051390021",
  appId: "1:494051390021:web:83cf4a229122f80d6ee92c",
  measurementId: "G-4Y4RWH5MZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

module.exports.db = db;
module.exports.collection = collection;
module.exports.getDocs = getDocs;
module.exports.setDoc = setDoc;
module.exports.where = where;
module.exports.query = query;
module.exports.doc = doc;
module.exports.getDoc = getDoc;
module.exports.addDoc = addDoc;