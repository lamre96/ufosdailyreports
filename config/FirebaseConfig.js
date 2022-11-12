import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyAHz8H46ESOulQc_ITwTCDAJPDJWQsahfs",
  authDomain: "all-aliens-anomaliens-pages.firebaseapp.com",
  projectId: "all-aliens-anomaliens-pages",
  storageBucket: "all-aliens-anomaliens-pages.appspot.com",
  messagingSenderId: "299043693746",
  appId: "1:299043693746:web:6ac58d4b165aefafa8d5ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
