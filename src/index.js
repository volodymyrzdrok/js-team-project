import { refs } from './js/refs/refs';
import { getRandomCocktails } from './js/getProducts/getRandomCocktails';
import { getCocktailsByName } from './js/getProducts/getCocktailsByName';
import { getCocktailsByLetter } from './js/getProducts/getCocktailsByLetter';
import { getInfoCocktail } from './js/getProducts/getInfoCocktail';
// import { getInfoIngredient } from './js/getProducts/getInfoIngredient';


getRandomCocktails();

refs.formSearch.addEventListener('submit', getCocktailsByName);
refs.lettersList.addEventListener('click', getCocktailsByLetter);
refs.productList.addEventListener('click', getInfoCocktail);