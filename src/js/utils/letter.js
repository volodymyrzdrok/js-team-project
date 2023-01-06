// import {
//     clearDomELements,
//     onReject,
//     renderElementsMarkup,
//   } from './utils';

// import { fetchProductsByLetter } from '../api/api';
// import { refs } from '../refs/refs';
// import { markupSearchingCocktails } from '../templates/markupSearchingCocktails';

// const keyboardElement = document.querySelector('.keyboard[data="keyboard"]');
// const selectElement = document.querySelector('.keyboard__cstm-select');

// keyboardElement.addEventListener('click', function(event) {
//   if (event.target.classList.contains('keyboard--itemletter')) {
//     const letter = event.target.dataset.letter;
//     console.log(letter);
//   }
// });

// selectElement.addEventListener('input', function(event) {
//   const inputValue = event.target.dataset.letter;
//   console.log(inputValue);
// });







//   const keyboardElement = document.querySelector('.keyboard[data="keyboard"]');
//   const selectElement = document.querySelector('.keyboard__cstm-select');

//   keyboardElement.addEventListener('click', function(event) {
//     if (event.target.classList.contains('keyboard--itemletter')) {
//       const letter = event.target.dataset.letter;
//       console.log(letter);

//       fetchProductsByLetter(letter)
//         .then(data => onResolve(data))
//         .catch(error => onReject(error));
//     }
//   });

//   selectElement.addEventListener('input', function(event) {
//     const inputLetter = event.target.dataset.letter;
//     console.log(inputLetter);

//     fetchProductsByLetter(inputLetter)
//       .then(data => onResolve(data))
//       .catch(error => onReject(error));
//   });


// function onResolve(data) {
//   const { productList, productListTitle } = refs;
//   const { drinks } = data;

//   if (!drinks) {
//     productListTitle.textContent = "Sorry, we didn't find any cocktail for you";
//     clearDomELements(productList);
//     return;
//   }
//   productListTitle.textContent = 'Searching results';
//   renderElementsMarkup(productList, markupSearchingCocktails, drinks);
// }