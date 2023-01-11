import { refsSign } from '../refs/refs';

refsSign.signupButton.addEventListener('click', toggleModal);

function toggleModal() {
  refsSign.signupWindow.classList.toggle('is-open');
}
