import { refs } from '../refs/refs';
import { fetchInfoProductById } from '../api/api';
import { markupModalInfo } from '../templates/markupInfoCoctail';
import * as basicLightbox from 'basiclightbox';
import { modalIngredients } from './modalInfoIngredient';
import { changeProductInLocalStorage } from '../localStorage/getProductsInLocalStorage';
import { checkFavCocktailsIndexFile } from '../utils/constans';

export async function renderModalCard(e) {
  const elBtnLearn = e.target.closest('.products__card-btns--learn');
  const elBtnToStorage = e.target.closest('.products__card-btns--add');

  if (!elBtnLearn && !elBtnToStorage) return;
  if (elBtnToStorage) {
    changeProductInLocalStorage(elBtnToStorage);
    return;
  }

  const cocktailId = elBtnLearn.dataset.idbtnlearn;

  try {
    const data = await fetchInfoProductById(cocktailId);
    openModal(data);
  } catch (error) {
    console.log(error);
  }
}

function openModal(data) {
  const instance = basicLightbox.create(markupModalInfo(data), {
    onShow: instance => {
      const elInModal = instance.element();
      refs.bodyRef.style.overflow = 'hidden';

      elInModal
        .querySelector('.cocktails-modal')
        .addEventListener('click', modalIngredients);
      elInModal
        .querySelector('.cocktails-modal__close-btn')
        .addEventListener('click', instance.close);
      if (checkFavCocktailsIndexFile) {
        elInModal
          .querySelector('.cocktails-modal__main-btn')
          .addEventListener('click', instance.close);
      }
    },
    onClose: () => {
      refs.bodyRef.style.overflow = 'auto';
    },
  });
  instance.show();
}
