import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJ31f2IdBgTDQuYgb0ZEYzZfw7WNWlraU",
  authDomain: "chat-app-e80be.firebaseapp.com",
  projectId: "chat-app-e80be",
  storageBucket: "chat-app-e80be.appspot.com",
  messagingSenderId: "721554876564",
  appId: "1:721554876564:web:939c82cf59f8e7ec64ac81",
  measurementId: "G-XE1HQ9V6K2"
};

const app = initializeApp(firebaseConfig);

// authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt : "select_account " });
const signInWithGoogle = () => signInWithPopup(auth, provider);
const signOutWithGoogle = () => signOut(auth);

// firestore
const db = getFirestore(app);

export { signInWithGoogle, signOutWithGoogle, auth, db }