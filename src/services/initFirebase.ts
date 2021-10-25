import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH6ySFtk81_OU9nvAv7wCSGafvmfhQnv8",
  authDomain: "saecufsc2021.firebaseapp.com",
  projectId: "saecufsc2021",
  storageBucket: "saecufsc2021.appspot.com",
  messagingSenderId: "522849321560",
  appId: "1:522849321560:web:f10fab0831a767cafd802d",
  measurementId: "G-HR4PH6XF8J",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth, analytics };
