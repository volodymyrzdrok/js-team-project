
  const refsBurger = {
    openMenuBtn: document.querySelector('.mobile-menu__burger'),
    closeMenuBtn: document.querySelector('.mobile-menu__close-btn'),
    menu: document.querySelector('.mobile-menu'),
  };

  refsBurger.openMenuBtn.addEventListener('click', toggleModal);
  refsBurger.closeMenuBtn.addEventListener('click', toggleModal);

function toggleModal() {
      console.log("1234")
    refsBurger.menu.classList.toggle('is-open');
  }