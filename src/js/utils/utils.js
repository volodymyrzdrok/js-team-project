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
