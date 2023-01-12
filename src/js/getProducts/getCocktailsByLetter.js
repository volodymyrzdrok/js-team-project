import { onReject, scrollSmoth } from '../utils/utils';
import { fetchProductsByLetter } from '../api/api';
import { refs } from '../refs/refs';
import { imgNotFound } from '../templates/markupImages';
import { renderMarkupList, resetPagination } from '../pagination/class';

import { clientWidth } from '../utils/constans';

export async function getCocktailsByLetter(e) {
  const checkEL = e.target.hasAttribute('data-letter');
  if (!checkEL) return;

  if (clientWidth < 745) {
    e.target.classList.add('keyboard__cstm-input--active');
    e.target.parentNode.classList.add('keyboard__cstm-summary--active');
    const boxLetter = document.querySelector('.keyboard__cstm-select');
    boxLetter.open = false;
  }
  const letter = e.target.getAttribute('data-letter').trim();

  try {
    const { drinks } = await fetchProductsByLetter(letter);
    onResolve(drinks);
  } catch (error) {
    onReject(error);
  }
}

function onResolve(drinks) {
  const { productTitle, productList } = refs;
  scrollSmoth('.js-product__list');
  if (!drinks) {
    productTitle.textContent = "Sorry, we didn't find any cocktail for you";
    productList.innerHTML = imgNotFound;
    resetPagination();
    return;
  }
  productTitle.textContent = 'Searching results';

  renderMarkupList(drinks, 'first');
}
