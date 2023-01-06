import { fetchProductsByName } from '../api/api';
import { refs } from '../refs/refs';
import { markupProductsList } from '../templates/markupSearchingCocktails';
import img from '../../images/Not-found.png'
export async function getCocktailsByName(e) {
  console.log(e);
  e.preventDefault();
  const value = e.currentTarget.searchCocktailName.value.trim();
 console.log(value);
  data = await fetchProductsByName(value);
  if (data.drinks === null) {
    refs.productTitle.textContent =
      'Sorry, we didn\'t find any cocktail for you';
    refs.productList.innerHTML =
      `<img class="not-found" src="${img}" alt="" width="280" height="280"></img>`;
    e.target.reset();
    return;
  } else {
    refs.productTitle.textContent = 'Searching results';
    refs.productList.innerHTML = markupProductsList(data.drinks);
    e.target.reset();
  }
}
