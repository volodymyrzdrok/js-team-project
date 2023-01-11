import { toggleModal, toggleModalMobile } from '../header-menu/drop-down-menu';
import { refs, refsMenu, refsSign } from '../refs/refs';
import { AUTH_USER } from '../utils/constans';
import defaultUserImg from '../../images/authorization.svg';
import { nitiflix } from '../utils/utils';

const userDataObj = () => JSON.parse(localStorage.getItem(AUTH_USER));

export function checkUserAuth() {
  const userData = userDataObj();
  if (userData) {
    addListenerMenu();
  } else {
    removListenerMenu();
  }
}

export function authController(e) {
  const userData = userDataObj();

  if (!userData) {
    nitiflix('warning', 'You need to log in ! Please, do it');
  } else {
    addListenerMenu();
  }
}

export function addListenerMenu() {
  const userData = userDataObj();
  refsMenu.favorites.addEventListener('click', toggleModal);
  refsMenu.favoritesMobile.addEventListener('click', toggleModalMobile);
  refsSign.userImgEl.src = userData.imgUser;
  refsSign.userImgEl.alt = userData.nameUser;
  refsSign.userGreating.innerHTML = `Welcome,</br> ${userData.nameUser}`;
}
export function removListenerMenu() {
  refsMenu.favorites.removeEventListener('click', toggleModal);
  refsMenu.favoritesMobile.removeEventListener('click', toggleModalMobile);
  refsSign.userGreating.innerHTML = `&#x261F; click btn &#x261F;`;
  refsSign.userImgEl.src = defaultUserImg;
}
// 'через пару секунд забирати відкриття вікна   РЕалізуй!!'
