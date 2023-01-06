import {
  //   clearDomELements,
  onReject,
  renderElementsMarkup,
  scrollSmoth,
} from '../utils/utils';
import { fetchProductsByLetter } from '../api/api';
import { refs } from '../refs/refs';
import { markupProductsList } from '../templates/markupSearchingCocktails';
import { imgNotFound } from '../templates/markupImages';

export async function getCocktailsByLetter(e) {
  const checkEL = e.target.hasAttribute('data-letter');

  if (!checkEL) return;

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
    return;
  }
  productTitle.textContent = 'Searching results';
  renderElementsMarkup(productList, markupProductsList, drinks);
}
