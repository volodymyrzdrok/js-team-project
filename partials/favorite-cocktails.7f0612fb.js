var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequired870;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired870=a);var n=a("eKZEX"),r=a("3ILHO"),i=a("1jOZz"),l=a("hhykh"),c=a("jXDaJ");var s=a("bQTwX");r=a("3ILHO");console.log("працює COCCKKK"),async function(){console.log("Cocktails in localStorage : ",await(0,n.getDataLocalStorage)(l.FAV_COCKTAILS));try{!function(e){const{favoriteCocktailsList:t,favoriteCocktailSubTitle:o}=r.refs;if(0===e.length)return o.textContent="You haven't added any favorite cocktails yet",void(0,c.clearDomELements)(t);(0,c.renderElementsMarkup)(t,i.markupSearchingCocktails,e)}(await(0,n.getDataLocalStorage)(l.FAV_COCKTAILS))}catch(e){(0,c.onReject)(e)}}(),r.refs.favoriteCocktailsList.addEventListener("click",s.getInfoCocktail);
//# sourceMappingURL=favorite-cocktails.7f0612fb.js.map