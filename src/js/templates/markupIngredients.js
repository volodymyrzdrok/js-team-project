import { svgHeartFull } from './markupImages';

export function markupIngredients(arr) {
  return arr
    .map(({ idIngredient, strIngredient, strDescription, strType }) => {
      return ` <li class="fav-ingredients__item" data-idingr="${idIngredient}" >
  <h3 class="fav-ingredients__card-title">${strIngredient}</h3>
  <p class="fav-ingredients__desc">${strType ? strType : 'Water'}</p>
  <div class="fav-ingredients__btns">
    <button class="products__card-btns--learn">Learn more</button>
    <button class="products__card-btns--add  btn-ingred-modal-storage">
      Remove
${svgHeartFull}
    </button>
  </div>
</li>`;
    })
    .join('');
}

export const favMessage = message => `<div class="fav-notFound__box">
  <p class="fav-notFound__message">${message}</p>
</div>`;
