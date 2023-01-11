import { getDataLocalStorage } from '../api/localStorageApi';
import { refs } from '../refs/refs';
import { FAV_COCKTAILS } from '../utils/constans';
import { renderElementsMarkup, onReject } from '../utils/utils';
import { markupProductsList } from '../templates/markupSearchingCocktails';
import { favMessage } from '../templates/markupIngredients';
import { renderMarkupList } from '../pagination/class';

export async function getFavCocktails() {
  try {
    const result = await getDataLocalStorage(FAV_COCKTAILS);
    onResolve(result);
  } catch (error) {
    onReject(error);
  }
}

export async function getSearchFavCocktailsByName(e) {
  const nameProduct = e.target.value.toLowerCase().trim();

  const favCoctailsArr = await getDataLocalStorage(FAV_COCKTAILS);

  const newFilterArr = favCoctailsArr.filter(el =>
    el.strDrink.toLowerCase().includes(nameProduct)
  );

  onResolve(newFilterArr);
}

function onResolve(drinksArr) {
  const { productList } = refs;

  if (drinksArr.length === 0) {
    productList.innerHTML = favMessage(
      `You haven't added any favorite cocktails yet`
    );
    return;
  }

  // renderElementsMarkup(productList, markupProductsList, drinksArr);
  renderMarkupList(drinksArr, 'first');
}
