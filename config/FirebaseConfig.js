import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3VwTyBfQp6THgLlZaacS5FJqMAKtp3CU",
  authDomain: "ufosightingsandanomalien.firebaseapp.com",
  projectId: "ufosightingsandanomalien",
  storageBucket: "ufosightingsandanomalien.appspot.com",
  messagingSenderId: "632189364846",
  appId: "1:632189364846:web:a0cfed9dc961184a41947f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
