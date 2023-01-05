import { refs } from "../refs/refs";
import { fetchProductsByLetter } from "../api/api";
import { markupProductsList } from "../templates/markupSearchingCocktails";

export async function getCocktailsByLetter(e) {
  const value = e.target.innerHTML;

  data = await fetchProductsByLetter(value);

  refs.productList.innerHTML = markupProductsList(data.drinks);
}