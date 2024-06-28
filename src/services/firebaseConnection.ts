import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEcokIAwycjEy_7pggW_4N_NQP5DLCrXQ",
  authDomain: "reactlinks-92415.firebaseapp.com",
  projectId: "reactlinks-92415",
  storageBucket: "reactlinks-92415.appspot.com",
  messagingSenderId: "772503922655",
  appId: "1:772503922655:web:36440f84a438b3ff3ac66a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
