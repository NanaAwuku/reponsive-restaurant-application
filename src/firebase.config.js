import {getApp, getApps, initializeApp}from 'firebase/app'
import { getFirestore}from 'firebase/firestore'
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDuM_xpjmmIwbpp7O4pRLB2mJPYDT3poqk",
  authDomain: "restaurant-app-82430.firebaseapp.com",
  databaseURL: "https://restaurant-app-82430-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-82430",
  storageBucket: "restaurant-app-82430.appspot.com",
  messagingSenderId: "1052548557216",
  appId: "1:1052548557216:web:da967b92032fe52baddcc5"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
export{app, firestore, storage};