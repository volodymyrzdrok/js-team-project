export function markupProductsList(arr) {
  return arr
    .map(({ strDrink, strDrinkThumb }) => {
      return `<li class="products__item">
        <img
          class="products__img"
          src="${strDrinkThumb}"
          alt=""
          width="280"
          height="280"
        />
        <div class="products__card">
          <h3 class="products__card-title">${strDrink}</h3>
          <div class="products__card-btns">
            <button type="button"  class="btn__learn">Learn more</button>
            <button type="button" class="btn__add">
              Add to
              <svg class="btn__svg" width="18" height="18">
                <use href="./images/svgs.svg#heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`;
    })
    .join('');
}
