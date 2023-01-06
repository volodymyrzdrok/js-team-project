import { fetchProductsByName } from '../api/api';
import { refs } from '../refs/refs';
import { markupProductsList } from '../templates/markupSearchingCocktails';
import img from '../../images/not-found-img/Not-found.png';
export async function getCocktailsByName(e) {
  console.log(e);
  e.preventDefault();
  const value = e.currentTarget.searchCocktailName.value.trim();
 console.log(value);
  data = await fetchProductsByName(value);
  if (data.drinks === null) {
    refs.productTitle.textContent =
      'Sorry, we didn\'t find any cocktail for you';
    refs.productList.innerHTML = `<picture>
                <source
                  srcset="${img}"
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="${img} "
                  media="(min-width: 768px)"
                />
                <img
                  class="our-team__img"
                  width="270"
                  srcset="
                    ${img}   1x,
                    ${img} 2x,
                    ${img}3x
                  "
                  src="${img}"
                  alt="cafe"
                />
              </picture>`;
    e.target.reset();
    return;
  } else {
    refs.productTitle.textContent = 'Searching results';
    refs.productList.innerHTML = markupProductsList(data.drinks);
    e.target.reset();
  }
}
