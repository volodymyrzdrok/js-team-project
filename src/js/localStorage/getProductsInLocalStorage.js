import { fetchInfoProductById } from '../api/api';
import {
  getDataLocalStorage,
  saveDataLocalStorage,
} from '../api/localStorageApi';
import { refs } from '../refs/refs';
import { btnAddInProductCard } from '../templates/markupSearchingCocktails';
import { btnAddCocktailInMOdal } from '../templates/markupInfoCoctail';
import { checkFavCocktailsIndexFile, FAV_COCKTAILS } from '../utils/constans';

export async function getProductsInLocalStorage(idProduct) {
  const productsFromStorage = getDataLocalStorage(FAV_COCKTAILS);

  const { drinks } = await fetchInfoProductById(idProduct);
  const objProduct = drinks[0];
  const foundEl = productsFromStorage.find(el => el.idDrink === idProduct);

  if (productsFromStorage.length === 0 || !foundEl) {
    saveDataLocalStorage(FAV_COCKTAILS, [...productsFromStorage, objProduct]);
  } else {
    const newProductsFromStorage = productsFromStorage.filter(
      el => el.idDrink !== idProduct
    );
    saveDataLocalStorage(FAV_COCKTAILS, newProductsFromStorage);
  }
}

export function changeProductInLocalStorage(elDomProductAdd) {
  const coctailId = elDomProductAdd.dataset.idbtn;
  const elProductAction = elDomProductAdd.dataset.action;
  const parentEl = elDomProductAdd.parentNode;

  elDomProductAdd.remove();
  if (elProductAction === 'add') {
    parentEl.innerHTML += btnAddInProductCard('remove', coctailId);
  } else {
    parentEl.innerHTML += btnAddInProductCard('add', coctailId);
    if (checkFavCocktailsIndexFile) {
      refs.productList
        .querySelector(`[data-idproduct="${coctailId}"]`)
        .remove();
    }
  }

  getProductsInLocalStorage(coctailId);
}

export function changeProductsInModalLocStorage(elBtnAddInModal) {
  const coctailId = elBtnAddInModal.dataset.idbtnmodal;
  const actionElAddInModal = elBtnAddInModal.dataset.action;
  const parentElAddInModal = elBtnAddInModal.parentNode;
  const elBtnAddToProducts = refs.productList.querySelector(
    `[data-idbtn="${coctailId}"]`
  );
  const elBtnAddToProductsParent = elBtnAddToProducts.parentNode;

  elBtnAddToProducts.remove();
  elBtnAddInModal.remove();

  if (actionElAddInModal === 'add') {
    parentElAddInModal.insertAdjacentHTML(
      'beforeend',
      btnAddCocktailInMOdal('remove', coctailId)
    );

    elBtnAddToProductsParent.innerHTML += btnAddInProductCard(
      'remove',
      coctailId
    );
  } else {
    parentElAddInModal.insertAdjacentHTML(
      'beforeend',
      btnAddCocktailInMOdal('add', coctailId)
    );
    elBtnAddToProductsParent.innerHTML += btnAddInProductCard('add', coctailId);
    if (checkFavCocktailsIndexFile) {
      refs.productList
        .querySelector(`[data-idproduct="${coctailId}"]`)
        .remove();
    }
  }

  getProductsInLocalStorage(coctailId);
}
