//Configuracion de firebase

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
  
firebase.initializeApp({
    apiKey: "AIzaSyAzD1BPmUh7UYUJSUsaHRMcY3-MMxQSZxI",
    authDomain: "hackathon-citi.firebaseapp.com",
    databaseURL: "https://hackathon-citi.firebaseio.com",
    projectId: "hackathon-citi",
    storageBucket: "hackathon-citi.appspot.com",
    messagingSenderId: "459170762062",
    appId: "1:459170762062:web:94b7791e7121587345e21f"
  });

  const db = firebase.firestore();
 export const auth = firebase.auth();
 export default db;
