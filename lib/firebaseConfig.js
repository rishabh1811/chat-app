
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore , collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD832dnl-UVSmRsPLIdwTe2JIS12HC_uAQ",
  authDomain: "dark-chat-97a58.firebaseapp.com",
  projectId: "dark-chat-97a58",
  storageBucket: "dark-chat-97a58.appspot.com",
  messagingSenderId: "871609480604",
  appId: "1:871609480604:web:aef521419472cd2774c459"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const colRef = collection(db, "messages")
