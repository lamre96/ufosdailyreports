import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXZdYZ-t5sqHfUYICze4NSs2odhe38ow0",
  authDomain: "all-anomaliens-ufos-aliens.firebaseapp.com",
  projectId: "all-anomaliens-ufos-aliens",
  storageBucket: "all-anomaliens-ufos-aliens.appspot.com",
  messagingSenderId: "1007826370643",
  appId: "1:1007826370643:web:710d39c9f5ee630d4386a6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
