import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

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
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const db = getFirestore(firebaseApp);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
