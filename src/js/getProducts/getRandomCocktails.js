import { refs } from '../refs/refs';
import { fetchProductsRandom } from '../api/api';
import { markupProductsList } from '../templates/markupSearchingCocktails';
import { renderElementsMarkup } from '../utils/utils';
import { onClickBtnLearnMore } from '../modals/modalInfoCoctail';


let amountCocktails = 3;
const clientWidth = document.documentElement.clientWidth;
if (clientWidth >= 786) {
  amountCocktails = 6;
}
if (clientWidth >= 1280) {
  amountCocktails = 9;
}

export async function getRandomCocktails() {
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
  onClickBtnLearnMore()
}
