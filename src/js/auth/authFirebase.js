import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../api/firebase-config';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { AUTH_USER } from '../utils/constans';
import { removListenerMenu, addListenerMenu } from './authController';

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const onLogInAuth = () => {
  return signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const { displayName, photoURL } = result.user;
      const dataUserObj = {
        imgUser: photoURL,
        nameUser: displayName,
      };
      localStorage.setItem(AUTH_USER, JSON.stringify(dataUserObj));
      addListenerMenu();
    })
    .catch(error => {
      const errorMessage = error.message;
      console.log(errorMessage);
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    });
};
export const onLogOutAuth = () => {
  removListenerMenu();
  localStorage.removeItem(AUTH_USER);

  return signOut(auth)
    .then(() => {})
    .catch(error => {
      console.log(error);
    });
};
