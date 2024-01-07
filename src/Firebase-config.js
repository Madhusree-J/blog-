
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOqDK1Sw-JgB7yuATGA4atZ-0icst_VDs",
  authDomain: "blog-page-7df79.firebaseapp.com",
  projectId: "blog-page-7df79",
  storageBucket: "blog-page-7df79.appspot.com",
  messagingSenderId: "936200504319",
  appId: "1:936200504319:web:701dc8fc5ffe2b20a51dca"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db};