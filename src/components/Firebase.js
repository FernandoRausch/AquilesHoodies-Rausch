import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2V6dnMjGABxT3ppMnxq1wIRgvHnwlDdA",
  authDomain: "aquileshoodies.firebaseapp.com",
  projectId: "aquileshoodies",
  storageBucket: "aquileshoodies.appspot.com",
  messagingSenderId: "130313651943",
  appId: "1:130313651943:web:cceb755c3781c1bcba4442"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)