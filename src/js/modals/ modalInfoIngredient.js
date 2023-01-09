import { fetchInfoIngredientById, fetchInfoIngredientByName } from '../api/api';
import { markupModalIngredients } from '../templates/markupInfoIngredient';
import * as basicLightbox from 'basiclightbox';
import { changeProductsInModalLocStorage } from '../localStorage/getProductsInLocalStorage';
import {
  getIngredientsFunct,
  getIngredientsInLocalStorage,
} from '../localStorage/getIngredientsInLocalStorage';
import { refs } from '../refs/refs';
import { onReject } from '../utils/utils';
import { checkFavIngredientsIndexFile } from '../utils/constans';

export async function modalIngredients(e) {
  const elIngred = e.target.closest('.modal-ingredients');
  const elBtnToStorageInModal = e.target.closest('.cocktails-modal__main-btn');

  if (!elIngred && !elBtnToStorageInModal) return;
  if (elBtnToStorageInModal) {
    changeProductsInModalLocStorage(elBtnToStorageInModal);
    return;
  }

  const nameIngred = elIngred.textContent.toLowerCase().trim();
  try {
    const data = await fetchInfoIngredientByName(nameIngred);
    openIngredientsModal(data);
  } catch (error) {
    console.log(error);
  }
}
export async function modalIngredientsInFavPage(e) {
  const elLearnIng = e.target.closest('.products__card-btns--learn');
  const elIngFromStorage = e.target.closest('.btn-ingred-modal-storage');
  const idIngred = e.target.closest('[data-idingr]').dataset.idingr;

  if (!elIngFromStorage && !elLearnIng) return;

  if (elIngFromStorage) {
    refs.ingredList.querySelector(`[data-idingr="${idIngred}"]`).remove();
    getIngredientsFunct(idIngred);
    return;
  }
  try {
    const data = await fetchInfoIngredientById(idIngred);
    openIngredientsModal(data);
  } catch (error) {
    onReject(error);
  }
}

function openIngredientsModal(data) {
  const instance = basicLightbox.create(markupModalIngredients(data), {
    onShow: instance => {
      const elInModal = instance.element();

      elInModal
        .querySelector('.cocktails-modal__main-btn')
        .addEventListener('click', getIngredientsInLocalStorage);

      elInModal
        .querySelector('.cocktails-modal__close-btn')
        .addEventListener('click', instance.close);
      if (checkFavIngredientsIndexFile) {
        elInModal
          .querySelector('.cocktails-modal__main-btn')
          .addEventListener('click', instance.close);
        elInModal
          .querySelector('.cocktails-modal__main-btn')
          .addEventListener('click', modalIngredientsInFavPage);
      }
    },
  });
  instance.show();
}
