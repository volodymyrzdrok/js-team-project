import { refs } from '../refs/refs';
import { fetchProductsRandom } from '../api/api';
import { markupProductsList } from '../templates/markupSearchingCocktails';
import { hideELements, renderElementsMarkup } from '../utils/utils';
import { clientWidth } from '../utils/constans';
let amountCocktails = 3;

if (clientWidth >= 745) {
  amountCocktails = 6;
}
if (clientWidth >= 1280) {
  amountCocktails = 9;
}

export async function getRandomCocktails() {
  hideELements(refs.spinnerEl, false);
  const promises = [];
  for (let i = 0; i < amountCocktails; i++) {
    promises.push(fetchProductsRandom());
  }
  const result = await Promise.all(promises);
  const randomCocktails = [];
  for (let product of result) {
    randomCocktails.push(product.drinks[0]);
  }

  renderElementsMarkup(refs.productList, markupProductsList, randomCocktails);
  hideELements(refs.spinnerEl, true);
}
