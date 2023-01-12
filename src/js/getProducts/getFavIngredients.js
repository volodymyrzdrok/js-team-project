import { getDataLocalStorage } from '../api/localStorageApi';
import { refs } from '../refs/refs';
import { FAV_INGREDIENTS } from '../utils/constans';
import { onReject } from '../utils/utils';
import { favMessage } from '../templates/markupIngredients';
import { renderMarkupList, resetPagination } from '../pagination/class';

export async function getFavorIngredinents() {
  try {
    const result = await getDataLocalStorage(FAV_INGREDIENTS);
    onResolve(result);
  } catch (error) {
    onReject(error);
    console.log(error);
  }
}
export async function getSearchFavIngredientsByName(e) {
  const nameProduct = e.target.value.toLowerCase().trim();

  const favCoctailsArr = await getDataLocalStorage(FAV_INGREDIENTS);

  const newFilterArr = favCoctailsArr.filter(el =>
    el.strIngredient.toLowerCase().includes(nameProduct)
  );

  onResolve(newFilterArr);
}

function onResolve(ingredArr) {
  const { ingredList } = refs;

  if (ingredArr.length === 0) {
    ingredList.innerHTML = favMessage(
      `You haven't added any favorite ingridients yet`
    );
    resetPagination();
    return;
  }

  renderMarkupList(ingredArr, 'first');
}
