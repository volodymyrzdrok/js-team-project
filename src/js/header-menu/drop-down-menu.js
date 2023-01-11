import { refsMenu } from '../refs/refs';

// refsMenu.favorites.addEventListener('click', toggleModal);
// refsMenu.favoritesMobile.addEventListener('click', toggleModalMobile);

export function toggleModal() {
  refsMenu.openMenuFav.classList.toggle('is-open');
  setTimeout(() => {
    refsMenu.openMenuFav.classList.toggle('is-open');
  }, 3000);
}

export function toggleModalMobile() {
  refsMenu.favoritesMobileMenu.classList.toggle('is-open');
  setTimeout(() => {
    refsMenu.favoritesMobileMenu.classList.toggle('is-open');
  }, 3000);
}
