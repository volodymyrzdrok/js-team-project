import { refs } from '../refs/refs';
import { fetchInfoProductById } from '../api/api';
import { markupModalInfo } from '../templates/markupInfoCoctail';
import * as basicLightbox from 'basiclightbox';
import { modalIngredients } from './ modalInfoIngredient';

export async function renderModalCard(e) {
  const elBtnLearn = e.target.closest('.products__card-btns--learn');
  if (!elBtnLearn) return;

  const cocktailId = elBtnLearn.dataset.idbtn;

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
    },
    onClose: () => {
      refs.bodyRef.style.overflow = 'auto';
    },
  });
  instance.show();
}
