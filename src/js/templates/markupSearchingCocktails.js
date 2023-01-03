export const markupSearchingCocktails = arrDrinks => {
  return arrDrinks
    .map(
      ({ idDrink, strDrink, strDrinkThumb }) => `<li class="products__item">
        <img
          class="products__img"
          src="${strDrinkThumb}"
          alt="${strDrink}"
          width="280"
          height="280"
        />
        <div class="products__card" data-id=${idDrink}>
          <h3 class="products__card-title">H3</h3>
          <div class="products__card-btns">
            <button class="btn__learn open-modal">Learn more</button>
            <button class="btn__add">
              Add to
              <svg class="btn__svg" width="18" height="18">
                <use href="./images/svgs.svg#heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`
    )
    .join('');
};

      