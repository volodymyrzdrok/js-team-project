import { refs } from '../refs/refs';
import { sendData, getData } from '../api';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from 'firebase/auth';

import { firebaseConfig } from '../firebase-config';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const onSignInWithPopup = () => {
  return signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const onSignOut = () => {
  return signOut(auth).catch(e => {
    console.log(e.message);
  });
};

let userID = '';

const login = () => {
  onSignInWithPopup().then(user => {
    userID = user.uid;

    refs.userLabel.textContent = user.email[0];
    refs.userMenu.style.display = 'flex';
    refs.signUpBtn.style.display = 'none';

    refs.signOutBtn.addEventListener('click', logout);
    refs.signUpBtn.removeEventListener('click', login);
  });
};

const logout = () => {
  onSignOut().then(() => {
    userID = '';

    refs.userLabel.textContent = '';
    refs.userMenu.style.display = 'none';
    refs.signUpBtn.style.display = 'block';

    refs.signUpBtn.addEventListener('click', login);
    refs.signOutBtn.removeEventListener('click', logout);
  });
};

refs.signUpBtn.addEventListener('click', login);

export const getLoginStatus = () => {
  return userID;
};

export const test = () => {
  const userID = getLoginStatus();
  if (!userID) {
    console.log('Not authorized');
    return;
  }
  sendData('cocktails', { name: 'some cocktails' }, userID);
  sendData('ingredients', { name: 'tomato' }, userID);
  sendData('contacts', { name: 'Petr', lastName: 'Kl.' });

  getData('cocktails', userID).then(data => {
    console.log('data >>>', data);
  });
  getData('ingredients', userID).then(data => {
    console.log('data >>>', data);
  });
  getData('contacts').then(data => {
    console.log('data >>>', data);
  });
};
