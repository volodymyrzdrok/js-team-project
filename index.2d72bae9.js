!function(){function t(t,n,e,o){Object.defineProperty(t,n,{get:e,set:o,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=e.parcelRequired870;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in r){var n=r[t];delete r[t];var e={id:t,exports:{}};return o[t]=e,n.call(e.exports,e,e.exports),e.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,n){r[t]=n},e.parcelRequired870=a),a.register("e5Gor",(function(n,e){t(n.exports,"markupSearchingCocktails",(function(){return c}));var o=a("gugsX"),r=a("9l38W"),c=function(t){var n=(0,o.getDataLocalStorage)(r.FAV_COCKTAILS);return t.map((function(t){var e=t.idDrink,o=t.strDrink,r=t.strDrinkThumb,a=n.find((function(t){return t.idDrink===e})),c='<button class="products__btn--add" data-id="'.concat(e,'"  data-action="').concat(a?"remove":"add",'"> ').concat(a?"remove":"add to","  </button>");return'<li  class="products__item" data-id="'.concat(e,'" >\n          <p class="products__name">').concat(o,'</p>\n          <img src="').concat(r,'" alt=').concat(o,' class="products__img">\n              <div class="products__btns" data-id=').concat(e,' >\n      <button class="products__btn--info" >Learn more</button>\n      ').concat(c,"\n    </div>\n        </li>")})).join("")}})),a.register("cqzQn",(function(e,o){t(e.exports,"getInfoCocktail",(function(){return v}));var r=a("bpxeT"),c=a("8nrFW"),i=a("2TvXO"),s=a("dyT35"),d=a("1X4Nb"),u=a("jPJ3W"),l=a("5mnqR"),f=a("f2Hct"),p=a("kAFNS"),_=a("9l38W");function v(t){return m.apply(this,arguments)}function m(){return(m=n(r)(n(i).mark((function t(e){var o,r,a,s,u;return n(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.target.closest(".products__btn--info"),r=e.target.closest(".products__btn--add"),o||r){t.next=4;break}return t.abrupt("return");case 4:if(!r){t.next=10;break}return a=r.parentNode.dataset.id,"add"===r.dataset.action?(r.dataset.action="remove",r.textContent="remove"):(_.checkFavCocktailsIndexFile&&(console.log("видаляю з розмітки"),e.target.closest(".products__item").remove()),r.dataset.action="add",r.textContent="add to"),(0,p.getProductsInLocalStorage)(a),t.abrupt("return");case 10:return s=o.parentNode.dataset.id,t.prev=11,t.next=14,(0,d.fetchInfoProductById)(s);case 14:u=t.sent,g.apply(void 0,n(c)(u.drinks)),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(11),(0,l.onReject)(t.t0);case 21:case"end":return t.stop()}}),t,null,[[11,18]])})))).apply(this,arguments)}function g(t){t&&s.create('\n      <div class ="modal  modal__fav--coctails"> '.concat((0,u.markupInfoCoctail)(t)," </div>\n    "),{onShow:function(t){var n=t.element();n.querySelector(".modal__fav--coctails").addEventListener("click",f.getInfoIngredient),n.querySelector(".modal-close").addEventListener("click",t.close),_.checkFavCocktailsIndexFile&&n.querySelector('[data-action="remove"]').addEventListener("click",t.close)}}).show()}})),a.register("jPJ3W",(function(n,e){t(n.exports,"markupInfoCoctail",(function(){return c}));var o=a("gugsX"),r=a("9l38W");function c(t){var n=Object.keys(t).filter((function(t){return t.includes("strIngredient")})),e=(0,o.getDataLocalStorage)(r.FAV_COCKTAILS),a=t.idDrink,c=t.strDrink,i=t.strDrinkThumb,s=t.strInstructions,d=e.find((function(t){return t.idDrink===a}));return'<div class="product-info modal__infoCocktail">\n  <button class="modal-close">CLOSE modal</button>\n  <button class="products__btn--add" data-id="'.concat(a,'" data-action="').concat(d?"remove":"add",'">\n   ').concat(d?"remove":"add to",'\n  </button>\n  <div class="product-info__container">\n    <img\n      src="').concat(i,'"\n      width="100"\n      alt="').concat(c,'"\n      class="product-info__img"\n    />\n    <h4 class="product-info__title">').concat(c,'</h4>\n\n    <ul class="product-info__list--ingr">\n      ').concat(n.map((function(n){return t[n]?'\n      <li class="product-info__item--ing">\n        <span class="product-info__item--span" > &sext; </span>\n        <a class="product-info__item--title" href="#">'.concat(t[n],"</a>\n      </li>\n      "):null})).join(""),'\n      <li class="product-info__item--ing"></li>\n    </ul>\n  </div>\n  <p>instruction</p>\n  <p>').concat(s,"</p>\n</div>")}}))}();
//# sourceMappingURL=index.2d72bae9.js.map
