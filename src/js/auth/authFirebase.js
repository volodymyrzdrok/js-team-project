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
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    });
};
export const onLogOutAuth = () => {
  removListenerMenu();
  localStorage.removeItem(AUTH_USER);

  return signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
      // An error happened.
    });
};

// 'через пару секунд забирати відкриття вікна   РЕалізуй!!'
// зет індекс при певних ширинах інший!
