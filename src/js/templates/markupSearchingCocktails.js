import { getDataLocalStorage } from '../api/localStorageApi';
import { FAV_COCKTAILS } from '../utils/constans';
import { svgHeart, svgHeartFull } from './markupImages';

export function markupProductsList(arr) {
  const favoriteCocktails = getDataLocalStorage(FAV_COCKTAILS);

  return arr
    .map(({ idDrink, strDrink, strDrinkThumb }) => {
      const foundEl = favoriteCocktails.find(el => el.idDrink === idDrink);

      return `<li class="products__item" data-idproduct="${idDrink}">
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
            <button type="button"  class="products__card-btns--learn" data-idbtnlearn="${idDrink}">Learn more</button>
           ${btnAddInProductCard(!foundEl ? 'add' : 'remove', idDrink)}
          </div>
        </div>
      </li>`;
    })
    .join('');
}

export const btnAddInProductCard = (
  action,
  id
) => `<button type="button" class="products__card-btns--add" data-idbtn="${id}" data-action=${action}>
               ${action === 'add' ? 'Add to' : 'Remove'}
           ${action === 'add' ? svgHeart : svgHeartFull}
              </button>`;
