(() => {
  const refs = {
    openMenuFav: document.querySelector('.site-nav__favorites'),
    favorites: document.querySelector('.site-nav__item'),
    favoritesMobile: document.querySelector('.site-nav-mobile__item'),
    favoritesMobileMenu: document.querySelector('.site-nav__favorites-mobile')
  };

    refs.favorites.addEventListener('click', toggleModal);
    refs.favoritesMobile.addEventListener('click', toggleModalMobile);

  function toggleModal() {
    refs.openMenuFav.classList.toggle('is-open');
    }
    
    function toggleModalMobile() {
    refs.favoritesMobileMenu.classList.toggle('is-open');
  }
})();