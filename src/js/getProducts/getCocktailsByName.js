import { fetchProductsByName } from '../api/api';
import { refs } from '../refs/refs';
import { imgNotFound } from '../templates/markupImages';
import { markupProductsList } from '../templates/markupSearchingCocktails';
import { onReject, renderElementsMarkup, scrollSmoth } from '../utils/utils';

export async function getCocktailsByName(e) {
  e.preventDefault();
  const value = e.currentTarget.searchCocktailName.value.trim();
  if (!value) return;

  try {
    const { drinks } = await fetchProductsByName(value);
    onResolve(drinks);
    e.target.reset();
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
