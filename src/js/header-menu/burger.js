import { refsBurger } from '../refs/refs';

refsBurger.openMenuBtn.addEventListener('click', toggleModal);
refsBurger.closeMenuBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refsBurger.menu.classList.toggle('is-open');
}
