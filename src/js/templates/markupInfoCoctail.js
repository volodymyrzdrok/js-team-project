export function markupModalInfo(data) {
  let valueIngredients = []
  for (let i = 1; i <= 15; i++) {
    const value = data.drinks[0][`strIngredient${i}`]
    if (value !== null) {
      valueIngredients.push(value)
    }
  }

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
          ${valueIngredients.map(el => `<li class="cocktails-modal__list-item"><a class="cocktails-modal__list-link modal-ingredients" href="">${el}</a></li>`).join('')}
          </ul>
          </div>
              <div class="cocktails-modal__content-second-wrapper">
        <p class="cocktails-modal__subtitle">Instractions:</p>
        <p class="cocktails-modal__text-content">${strInstructions}</p>
          </div>`
    
};