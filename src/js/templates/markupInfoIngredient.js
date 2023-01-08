import { Notify } from 'notiflix';
import sprite from '../../images/svgs.svg';
import { getDataLocalStorage } from '../api/localStorageApi';
import { FAV_INGREDIENTS } from '../utils/constans';

export function markupModalIngredients(data) {
  const favoriteIngredients = getDataLocalStorage(FAV_INGREDIENTS);

  if (!data) {
    Notify.failure('Sorry, but there is no information for this ingredient');
  }

  const { idIngredient, strIngredient, strType, strDescription, strABV } =
    data.ingredients[0];
  const foundEl = favoriteIngredients.find(
    el => el.idIngredient === idIngredient
  );
  let index = 0;

  if (strDescription) {
    index = strDescription.indexOf(' ');
  }

  return `<div class="cocktails-modal cocktails-modal--size"> <button class="cocktails-modal__close-btn" type="button">
          <svg class="cocktails-modal__btn-icon" height="32" width="32">
            <use href="${sprite}#close-btn"></use>
          </svg>
        </button>
        <div class="cocktails-modal__header">
        <h3 class="cocktails-modal__title">${strIngredient}</h3>
        ${strType ? `<p class="cocktails-modal__subtitle">${strType}</p>` : ''}
        </div>
        <div class="cocktails-modal__body">
        ${
          strDescription
            ? `<p class="cocktails-modal__text-content cocktails-modal__text-content--font"><span class="cocktails-modal__text-modification">${strDescription.slice(
                0,
                index
              )} </span>${strDescription.slice(index)}</p>`
            : ''
        }
          <ul class="cocktails-modal__list cocktails-modal__list--size">
            ${
              strType
                ? `<li class="cocktails-modal__list-item-ingr">Type: ${strType}</li>`
                : ''
            }
            <li class="cocktails-modal__list-item-ingr">Country of origin:	Italy</li>
            ${
              strABV
                ? `<li class="cocktails-modal__list-item-ingr">Alcohol by volume:	${strABV}%</li>`
                : ''
            }
            <li class="cocktails-modal__list-item-ingr">Flavour:	Bitter, spicy and sweet</li>
          </ul>
        <button
  class="cocktails-modal__main-btn"
  data-idingr="${idIngredient}"
  data-action=${!foundEl ? 'add' : 'remove'}
>
  ${!foundEl ? 'Add to favorite' : 'Remove from favorite'}
</button>
          </div>   </div>`;
}

// export const btnAddIngredInModal = (action, id) =>
//   `<button
//   class="cocktails-modal__main-btn"
//   data-idingr="${id}"
//   data-action=${action}
// >
//   ${action === 'add' ? 'Add to favorite' : 'Remove from favorite'}
// </button>`;

// ${btnAddIngredInModal(!foundEl ? 'add' : 'remove', idIngredient)}
