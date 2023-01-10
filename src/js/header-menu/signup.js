  const refsSign = {
    signupWindow: document.querySelector('.signup-greeting'),
    signupButton: document.querySelector('.signup__btn'),
  };

  refsSign.signupButton.addEventListener('click', toggleModal);

  function toggleModal() {
    refsSign.signupWindow.classList.toggle('is-open');
  }