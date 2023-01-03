import { onReject, renderElementsMarkup } from '../utils/utils';
import { fetchProductsRandom } from '../api/api';
import { refs } from '../refs/refs';
import { markupSearchingCocktails } from '../templates/markupSearchingCocktails';
import {onClickBtnLearnMore} from '../modals/modalInfoCoctail'

export async function getRandomCocktails() {
  try {
    const result = await fetchProductsRandom();
    onResolve(result);
  } catch (error) {
    onReject(error);
  }
}

function onResolve(data) {
  const { productList, productListTitle } = refs;
  const { drinks } = data;
  if (!drinks) {
    productListTitle.textContent = "Sorry, we didn't find any cocktail for you";
    clearDomELements(productList);
    return;
  }
  productListTitle.textContent = 'Cocktails';

  renderElementsMarkup(productList, markupSearchingCocktails, drinks);
onClickBtnLearnMore()
}
