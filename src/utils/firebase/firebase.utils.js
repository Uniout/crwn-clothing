import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBiXN2y6KQbjppQJQMkuKAShNNNyM8tszs",
  authDomain: "crwn-clothing-db-3b986.firebaseapp.com",
  projectId: "crwn-clothing-db-3b986",
  storageBucket: "crwn-clothing-db-3b986.appspot.com",
  messagingSenderId: "667777491627",
  appId: "1:667777491627:web:3850bb4d1d21a529bdcdee"
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);