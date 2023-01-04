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
