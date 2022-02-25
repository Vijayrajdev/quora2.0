import Firebase from "firebase";
import { config } from "dotenv";

config();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_API_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};

Firebase.initializeApp(firebaseConfig);
const auth = Firebase.auth();
const provider = new Firebase.auth.GoogleAuthProvider();
const db = Firebase.firestore();

export { auth, provider };
export default db;
