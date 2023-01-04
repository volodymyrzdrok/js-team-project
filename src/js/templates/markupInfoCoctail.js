export function markupModalInfo(data) {

    const valueIngredients = Object.keys(data.drinks[0]).filter(el => 
    el.includes('strIngredient')
    );
  
    const { idDrink, strDrink, strDrinkThumb, strInstructions } = data.drinks[0];

  return `<h3 class="cocktails-modal__title cocktails-modal__list-wrapper" data-id="${idDrink}">${strDrink}</h3>
        <div class="cocktails-modal__content-wrapper">
        <p class="cocktails-modal__subtitle">Instractions:</p>
        <p class="cocktails-modal__text-content">${strInstructions}</p>
          </div>
          <div class="cocktails-modal__thumb">
            <img class="cocktails-modal__thumb-img" src="${strDrinkThumb}" alt="${strDrink}">
          </div>
          <div class="cocktails-modal__list-wrapper">
          <p class="cocktails-modal__list-title">INGREDIENTS</p>
          <p class="cocktails-modal__list-subtitle">Per cocktail</p>
          <ul class="cocktails-modal__list">
          ${valueIngredients.map(key => data.drinks[0][key]? `<li class="cocktails-modal__list-item open-modal"><a class="cocktails-modal__list-link modal-ingredients open-modal" href="#">${data.drinks[0][key]}</a></li>` : null).join('')}
          </ul>
          </div>
              <div class="cocktails-modal__content-second-wrapper">
        <p class="cocktails-modal__subtitle">Instractions:</p>
        <p class="cocktails-modal__text-content">${strInstructions}</p>
          </div>`
    
};