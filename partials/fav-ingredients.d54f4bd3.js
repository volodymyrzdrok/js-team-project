var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired870;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired870=r);var o=r("3ILHO");r("hhykh");var i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=d||f||Function("return this")(),g=Object.prototype.toString,p=Math.max,v=Math.min,b=function(){return u.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}var h=r("l1xuB"),m=(o=r("3ILHO"),r("hhykh")),j=r("jXDaJ"),O=r("ieORu");function D(e){return e.map((({idIngredient:e,strIngredient:t,strDescription:n,strType:r})=>` <li class="fav-ingredients__item" data-idingr="${e}" >\n  <h3 class="fav-ingredients__card-title">${t}</h3>\n  <p class="fav-ingredients__desc">${r}</p>\n  <div class="fav-ingredients__btns">\n    <button class="products__card-btns--learn">Learn more</button>\n    <button class="products__card-btns--add  btn-ingred-modal-storage">\n      Remove\n${O.svgHeartFull}\n    </button>\n  </div>\n</li>`)).join("")}const I=e=>`<div class="fav-notFound__box">\n  <p class="fav-notFound__message">${e}</p>\n</div>`;var L=r("iLml6");console.log("працює INGREDDD FAR"),async function(){console.log("ingred-fav ---\x3e ",await(0,h.getDataLocalStorage)(m.FAV_INGREDIENTS));try{!function(e){const{ingredList:t}=o.refs;if(0===e.length)return void(t.innerHTML=I("You haven't added any favorite ingridients yet"));(0,j.renderElementsMarkup)(t,D,e)}(await(0,h.getDataLocalStorage)(m.FAV_INGREDIENTS))}catch(e){(0,j.onReject)(e),console.log(e)}}(),o.refs.ingredList.addEventListener("click",L.modalIngredientsInFavPage);
//# sourceMappingURL=fav-ingredients.d54f4bd3.js.map