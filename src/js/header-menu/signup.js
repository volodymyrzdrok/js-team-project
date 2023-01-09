
  const refs = {
    signupWindow: document.querySelector('.signup-greeting'),
    signupButton: document.querySelector('.signup__btn'),
  };

  refs.signupButton.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.signupWindow.classList.toggle('is-open');
  }