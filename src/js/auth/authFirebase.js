import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../api/firebase-config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { AUTH_USER } from '../utils/constans';
import { onReject } from '../utils/utils';
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
      onReject(error);
    });
};
export const onLogOutAuth = () => {
  removListenerMenu();
  localStorage.removeItem(AUTH_USER);
};

// 'через пару секунд забирати відкриття вікна   РЕалізуй!!'
