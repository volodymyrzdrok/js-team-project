
import { fetchInfoProductById } from '../api/api'
import { fetchInfoIngredientByName } from '../api/api'
import { markupModalInfo } from '../templates/markupInfoCoctail'
import {markupModalIngredients} from'../templates/markupInfoIngredient'
import * as basicLightbox from 'basiclightbox'


const listRef = document.querySelector('.js-product__list');
const bodyRef = document.querySelector('body');


  
export function onClickBtnLearnMore() {
  listRef.addEventListener("click", renderModalCard)
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
             bodyRef.style.overflow = 'hidden';
            instance.element().querySelector('.cocktails-modal').addEventListener('click', modalIngredients)
            instance.element().querySelector('.cocktails-modal__close-btn').addEventListener('click', instance.close)
            instance.element().querySelector('.cocktails-modal').addEventListener('click', changesTextBtn)

        },
        onClose: (instance) => {
             bodyRef.style.overflow = 'auto';
      },
    }
  );
  instance.show();
}

function changesTextBtn(e) {
        if (!e.target.classList.contains('cocktails-modal__main-btn')) return;
    if (e.target.textContent === 'Add to favorite') {
        e.target.textContent = 'Remove from favorite';
    } else {
        e.target.textContent = 'Add to favorite';
  }
}

async function modalIngredients(e) {
if (!e.target.classList.contains('modal-ingredients')) return;
     try {
         const name = e.target.textContent
         const data = await fetchInfoIngredientByName(name)
         openIngredientsModal(data)
    } catch (error) {
      console.log(error);
    }
}
    
function openIngredientsModal(data) {
     const instance = basicLightbox.create(
    `<div class="cocktails-modal cocktails-modal--size">
    ${markupModalIngredients(data)}
    </div>`,
    {
        onShow: (instance) => {
            instance.element().querySelector('.cocktails-modal').addEventListener('click', changesTextBtn)
            instance.element().querySelector('.cocktails-modal__close-btn').addEventListener('click', instance.close)
      },
    }
  );
  instance.show();
}

