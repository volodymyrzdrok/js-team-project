var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired870;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired870=o);var r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=u||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return s.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||c.test(e)?f(e.slice(2),n?2:8):a.test(e)?NaN:+e}var g=o("l1xuB"),h=o("3ILHO"),j=o("hhykh"),L=o("jXDaJ"),x=o("1jOZz");o("ieORu");const m=e=>`<div class="fav-notFound__box">\n  <p class="fav-notFound__message">${e}</p>\n</div>`;var w=o("1JOti");h=o("3ILHO");o("hhykh"),console.log("працює COCCKKK FAV"),async function(){console.log("cock-fav ---\x3e ",await(0,g.getDataLocalStorage)(j.FAV_COCKTAILS));try{!function(e){const{productList:t}=h.refs;if(0===e.length)return void(t.innerHTML=m("You haven't added any favorite cocktails yet"));(0,L.renderElementsMarkup)(t,x.markupProductsList,e)}(await(0,g.getDataLocalStorage)(j.FAV_COCKTAILS))}catch(e){(0,L.onReject)(e)}}(),h.refs.productList.addEventListener("click",w.renderModalCard);
//# sourceMappingURL=fav-cocktails.bc169c98.js.map
