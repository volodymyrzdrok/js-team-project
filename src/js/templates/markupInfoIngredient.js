export function markupModalIngredients(data) {

    const { strIngredient, strType, strDescription } = data.ingredients[0];

    return `<button class="cocktails-modal__close-btn" type="button">
          <svg class="cocktails-modal__btn-icon" height="32" width="32">
            <use href="../../images/close-modal-btn.svg"></use>
          </svg>
        </button>
        <div class="cocktails-modal__header">
        <h3 class="cocktails-modal__title">${strIngredient}</h3>
        ${strType ? `<p class="cocktails-modal__subtitle">${strType}</p>` : ''}
        </div>
        <div class="cocktails-modal__body">
        ${strDescription ? `<p class="cocktails-modal__text-content cocktails-modal__text-content--font"><span class="cocktails-modal__text-modification">${strIngredient} </span>${strDescription}</p>` : ''}
          <ul class="cocktails-modal__list cocktails-modal__list--size">
            ${strType ? `<li class="cocktails-modal__list-item-ingr">Type: ${strType}</li>` : ''}
            <li class="cocktails-modal__list-item-ingr">Country of origin:	Italy</li>
            <li class="cocktails-modal__list-item-ingr">Alcohol by volume:	20.5–28.5%</li>
            <li class="cocktails-modal__list-item-ingr">Flavour:	Bitter, spicy and sweet</li>
          </ul>
          <button class="cocktails-modal__main-btn">Add to favorite</button>
          </div>`
    
};