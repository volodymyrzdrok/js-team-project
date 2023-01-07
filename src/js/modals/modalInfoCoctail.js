
import { refs } from '../refs/refs';
import { fetchInfoProductById } from '../api/api'
import { markupModalInfo } from '../templates/markupInfoCoctail'
import * as basicLightbox from 'basiclightbox'
import {modalIngredients} from './ modalInfoIngredient'


export function onClickBtnLearnMore() {
  refs.productList.addEventListener("click", renderModalCard)
}

async function renderModalCard(e) {
    if (!e.target.classList.contains('btn__learn')) return;
     try {
      const idRef = e.target.closest('[data-id]');
         const data = await fetchInfoProductById(idRef.dataset.id)
         openModal(data)
         
    } catch (error) {
      console.log(error);
    }
}


function openModal(data) {
    const instance = basicLightbox.create(
    `<div class="cocktails-modal cocktails-modal--padding">
${markupModalInfo(data)}
    </div>`,
    {
        onShow: (instance) => {
            refs.bodyRef.style.overflow = 'hidden';
            instance.element().querySelector('.cocktails-modal').addEventListener('click', modalIngredients)
            instance.element().querySelector('.cocktails-modal__close-btn').addEventListener('click', instance.close)
        },
        onClose: (instance) => {
             refs.bodyRef.style.overflow = 'auto';
      },
    }
  );
  instance.show();
}




