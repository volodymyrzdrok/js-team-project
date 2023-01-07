import { fetchInfoIngredientByName } from '../api/api'
import { markupModalIngredients } from '../templates/markupInfoIngredient'
import * as basicLightbox from 'basiclightbox'


export async function modalIngredients(e) {
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
            instance.element().querySelector('.cocktails-modal__close-btn').addEventListener('click', instance.close)
      },
    }
  );
  instance.show();
}