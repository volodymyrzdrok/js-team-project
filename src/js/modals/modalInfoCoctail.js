
import { fetchInfoProductById } from '../api/api'
import { markupModalInfo } from '../templates/markupInfoCoctail'
import { renderElementsMarkup } from '../utils/utils';


const divRef = document.querySelector('.cocktails-modal__inner')
const listRef = document.querySelector('.js-product__list');
const modalRef = document.querySelector('.modal');

  
export function onClickBtnLearnMore() {

  listRef.addEventListener("click", async (e) => {

    try {
          if (e.target.classList.contains('open-modal')) {
      modalRef.classList.toggle("is-hidden")
    }
      const idRef = e.target.closest('[data-id]');
        const data = await fetchInfoProductById(idRef.dataset.id)
        console.log(data);
      renderElementsMarkup(divRef, markupModalInfo, data)
    } catch (error) {
      console.log(error);
    }
const linkBtn = document.querySelector('.cocktails-modal__list')
        linkBtn.addEventListener('click', e => {
  if (e.target.nodeName === 'A') {
      e.preventDefault()
      const modal = document.querySelector(".second-modal")
    modal.classList.remove("is-hidden");
  }
})
  
  })
}

    

