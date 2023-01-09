import { refs } from '../refs/refs';
import { renderElementsMarkup } from '../utils/utils.js';
import { authMenuMarkup } from '../templates/authMenuMarkup.js';
// 05.01.23\/
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
      console.log(user);
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
// 05.01.23/\
export const onSignOut = () => {
  return signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out :>> ');
    })
    .catch(error => {
      // An error happened.
    });
};
// 09.01.23/\
let userID = '';

const authorization = () => {
  if (!userID) {
    onSignInWithPopup().then(user => {
      userID = user.uid;
    });
  } else {
    onSignOut().then(() => {
      userID = '';
    });
  }

  renderElementsMarkup(refs.signUpBtn, authMenuMarkup, !userID);
};

refs.signUpBtn.addEventListener('click', authorization);

export const getLoginStatus = () => {
  return userID;
};

// getData('test').then(data => {
//   console.log(data);
//   // рендер списка избраных коктелей или ингридиентов
// });

// sendData({ task: 'text-2' }, 'test');
// сохранить в базу данных

// console.log(isLoggedIn);

// deleteItem('test', '-NLHwtVl7-5fGGn9Ppmj');
