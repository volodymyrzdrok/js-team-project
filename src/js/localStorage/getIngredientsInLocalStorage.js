import { fetchInfoIngredientById } from '../api/api';
import {
  getDataLocalStorage,
  saveDataLocalStorage,
} from '../api/localStorageApi';
import { FAV_INGREDIENTS } from '../utils/constans';

export function getIngredientsInLocalStorage(e) {
  const elemBtnIngToStorage = e.target.closest('.cocktails-modal__main-btn');
  if (!elemBtnIngToStorage) return;

  const ingredId = elemBtnIngToStorage.dataset.idingr;
  const actionElIngBtn = elemBtnIngToStorage.dataset.action;

  if (actionElIngBtn === 'remove') {
    elemBtnIngToStorage.dataset.action = 'add';
    elemBtnIngToStorage.textContent = 'Add to favorite';
  } else {
    elemBtnIngToStorage.textContent = 'Remove from favorite';
    elemBtnIngToStorage.dataset.action = 'remove';
  }

  getIngredientsFunct(ingredId);
}

export async function getIngredientsFunct(idProduct) {
  const productsFromStorage = getDataLocalStorage(FAV_INGREDIENTS);

  const { ingredients } = await fetchInfoIngredientById(idProduct);
  const objProduct = ingredients[0];
  const foundEl = productsFromStorage.find(el => el.idIngredient === idProduct);

  if (productsFromStorage.length === 0 || !foundEl) {
    saveDataLocalStorage(FAV_INGREDIENTS, [...productsFromStorage, objProduct]);
  } else {
    const newProductsFromStorage = productsFromStorage.filter(
      el => el.idIngredient !== idProduct
    );
    saveDataLocalStorage(FAV_INGREDIENTS, newProductsFromStorage);
  }
}
