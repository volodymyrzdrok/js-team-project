import { fetchProductsByName } from "../api/api";
import { refs } from "../refs/refs";
import { markupProductsList } from "../templates/markupSearchingCocktails";

export async function getCocktailsByName(e) {
  const value = e.target.value.trim();
  data = await fetchProductsByName(value);

  refs.productList.innerHTML = markupProductsList(data.drinks);
}
