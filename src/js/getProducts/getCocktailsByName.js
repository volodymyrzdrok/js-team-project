import { fetchProductsByName } from '../api/api';
import { refs } from '../refs/refs';
import { imgNotFound } from '../templates/markupImages';
import { onReject, scrollSmoth } from '../utils/utils';
import { renderMarkupList, resetPagination } from '../pagination/class';

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
    resetPagination();
    return;
  }
  productTitle.textContent = 'Searching results';

  renderMarkupList(drinks, 'first');
}
