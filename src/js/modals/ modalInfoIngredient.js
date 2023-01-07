import { fetchInfoIngredientByName } from '../api/api';
import { markupModalIngredients } from '../templates/markupInfoIngredient';
import * as basicLightbox from 'basiclightbox';
import { changeIngredientsInLocalStorage } from '../localStorage/getIngredientsInLocalStorage';

export async function modalIngredients(e) {
  const elIngred = e.target.closest('.modal-ingredients');
  const elBtnToStorageInModal = e.target.closest('.cocktails-modal__main-btn');

  if (!elIngred && !elBtnToStorageInModal) return;
  if (elBtnToStorageInModal) {
    changeIngredientsInLocalStorage(elBtnToStorageInModal);
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

function openIngredientsModal(data) {
  const instance = basicLightbox.create(markupModalIngredients(data), {
    onShow: instance => {
      const elInModal = instance.element();

      elInModal
        .querySelector('.cocktails-modal__close-btn')
        .addEventListener('click', instance.close);
    },
  });
  instance.show();
}
