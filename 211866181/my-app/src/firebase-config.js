
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBlwZFCjtR3ZjIJCKcJdUOCDaLhwKFUVzs",
  authDomain: "task-9ad2f.firebaseapp.com",
  projectId: "task-9ad2f",
  storageBucket: "task-9ad2f.appspot.com",
  messagingSenderId: "60381460756",
  appId: "1:60381460756:web:e11a016dcac7baf3baaa01",
  measurementId: "G-6SGX4758KW"
};


const app = initializeApp(firebaseConfig);




const db = getFirestore(app);

export { db };