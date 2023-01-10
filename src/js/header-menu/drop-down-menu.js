 const refsMenu = {
    openMenuFav: document.querySelector('.site-nav__favorites'),
    favorites: document.querySelector('.site-nav__item'),
    favoritesMobile: document.querySelector('.site-nav-mobile__item'),
    favoritesMobileMenu: document.querySelector('.site-nav__favorites-mobile')
  };

    refsMenu.favorites.addEventListener('click', toggleModal);
    refsMenu.favoritesMobile.addEventListener('click', toggleModalMobile);

  function toggleModal() {
    refsMenu.openMenuFav.classList.toggle('is-open');
    }
    
    function toggleModalMobile() {
    refsMenu.favoritesMobileMenu.classList.toggle('is-open');
  }