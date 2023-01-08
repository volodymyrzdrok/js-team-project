import { getDataLocalStorage } from '../api/localStorageApi';
import { refs } from '../refs/refs';
import { FAV_COCKTAILS } from '../utils/constans';
import { renderElementsMarkup, onReject } from '../utils/utils';
import { markupProductsList } from '../templates/markupSearchingCocktails';

export async function getFavCocktails() {
  console.log('cock-fav ---> ', await getDataLocalStorage(FAV_COCKTAILS));

  try {
    const result = await getDataLocalStorage(FAV_COCKTAILS);
    onResolve(result);
  } catch (error) {
    onReject(error);
  }
}

function onResolve(drinksArr) {
  const { productList } = refs;

  if (drinksArr.length === 0) {
    productList.innerHTML = 'зррботи елемент нема ніфіга(поміряти фюпорт)';
    return;
  }

  renderElementsMarkup(productList, markupProductsList, drinksArr);
}
