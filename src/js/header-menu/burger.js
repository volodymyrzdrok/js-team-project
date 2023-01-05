
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu__burger'),
    closeMenuBtn: document.querySelector('.mobile-menu__close-btn'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }