import { getDataLocalStorage } from '../api/localStorageApi';
import { refs } from '../refs/refs';
import { FAV_INGREDIENTS } from '../utils/constans';
import { renderElementsMarkup, onReject } from '../utils/utils';

import { markupIngredients } from '../templates/markupIngredients';

export async function getFavorIngredinents() {
  console.log('ingred-fav ---> ', await getDataLocalStorage(FAV_INGREDIENTS));

  try {
    const result = await getDataLocalStorage(FAV_INGREDIENTS);
    onResolve(result);
  } catch (error) {
    onReject(error);
    console.log(error);
  }
}

function onResolve(ingredArr) {
  const { ingredList } = refs;

  if (ingredArr.length === 0) {
    ingredList.innerHTML = 'зррботи елемент нема ніфіга(поміряти фюпорт)';
    return;
  }

  renderElementsMarkup(ingredList, markupIngredients, ingredArr);
}
