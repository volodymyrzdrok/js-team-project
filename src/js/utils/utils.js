import Notiflix from 'notiflix';

export const renderElementsMarkup = (elDom, funcMark, data) =>
  (elDom.innerHTML = funcMark(data));

export function onReject(err) {
  console.log(err.message);
}

export const clearDomELements = elDom => (elDom.innerHTML = '');

export const nitiflix = (typeOfAttentions, message) => {
  return Notiflix.Notify[typeOfAttentions](message, {
    distance: '20px',
  });
};

export const scrollSmoth = className => {
  const { height: cardHeight } = document
    .querySelector(className)
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};

export const hideELements = (elDom, hide) => {
  if (hide) {
    elDom.classList.add('is-hidden');
  } else {
    elDom.classList.remove('is-hidden');
  }
};






const btnUp = {
  el:document.querySelector('.show-btn-up'),
  scrolling: false,
  show() {
    if (this.el.classList.contains('show-btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('show-btn-up_hide');
      this.el.classList.add('show-btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('show-btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (!this.el.classList.contains('show-btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('show-btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('show-btn-up_hide');
        this.el.classList.remove('show-btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;

      if (scrollY > 400) {

        this.show();
      } else {

        this.hide();
      }
    });

    document.querySelector('.show-btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();
