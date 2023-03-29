import{initializeApp} from "firebase/app";
import{getAuth} from "firebase/auth";
import{getFirestore, serverTimestamp} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAM2dTUEHbV94G3r1JPykCXbXJK_pXORf0",
  authDomain: "mycardiomyopathy-ed9a7.firebaseapp.com",
  projectId: "mycardiomyopathy-ed9a7",
  storageBucket: "mycardiomyopathy-ed9a7.appspot.com",
  messagingSenderId: "711093302736",
  appId: "1:711093302736:web:e7806ed3141ff8cc8335d5"
};

const app = initializeApp(firebaseConfig);
const firebaseAuthentication = getAuth();
const firebaseFireStore = getFirestore();
const timestamp = serverTimestamp();

export{app,firebaseAuthentication,firebaseFireStore,timestamp};
