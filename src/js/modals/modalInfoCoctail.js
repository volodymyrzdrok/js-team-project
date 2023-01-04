
import { fetchInfoProductById } from '../api/api'
import { markupModalInfo } from '../templates/markupInfoCoctail'
import { renderElementsMarkup } from '../utils/utils';
import * as basicLightbox from '../../../node_modules/basiclightbox'

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()


const divRef = document.querySelector('.cocktails-modal__inner')
const listRef = document.querySelector('.js-product__list');
const modalRef = document.querySelector('.modal');
const cocktailsModal = document.querySelector('.cocktails-modal')
const secondModal = document.querySelector(".second-modal")

  
export function onClickBtnLearnMore() {
  listRef.addEventListener("click", renderModalCard)
}

async function renderModalCard(e) {
     try {
      openModal(e, modalRef)
      const idRef = e.target.closest('[data-id]');
      const data = await fetchInfoProductById(idRef.dataset.id)
      renderElementsMarkup(divRef, markupModalInfo, data)
    } catch (error) {
      console.log(error);
    }
      cocktailsModal.addEventListener('click', closeModal)
}

function openModal(e, ref) {
              if (e.target.classList.contains('open-modal')) {
      ref.classList.remove("is-hidden")
          }
}
    

function closeModal(e) {
    if (e.target.classList.contains('close-modal')) {
      modalRef.classList.add("is-hidden")
             }
    cocktailsModal.removeEventListener('click', closeModal)
       openModal(e, secondModal)
}
