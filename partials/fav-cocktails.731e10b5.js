function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired870;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired870=o);var i,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,v=l||d||Function("return this")(),p=Object.prototype.toString,y=Math.max,h=Math.min,g=function(){return v.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):u.test(e)?NaN:+e}i=function(e,t,n){var r,o,i,a,u,f,c=0,s=!1,l=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){return c=e,u=setTimeout(L,t),s?v(e):a}function m(e){var n=e-f;return void 0===f||n>=t||n<0||l&&e-c>=i}function L(){var e=g();if(m(e))return E(e);u=setTimeout(L,function(e){var n=t-(e-f);return l?h(n,i-(e-c)):n}(e))}function E(e){return u=void 0,d&&r?v(e):(r=o=void 0,a)}function j(){var e=g(),n=m(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return p(f);if(l)return u=setTimeout(L,t),v(f)}return void 0===u&&(u=setTimeout(L,t)),a}return t=O(t)||0,b(n)&&(s=!!n.leading,i=(l="maxWait"in n)?y(O(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},j.flush=function(){return void 0===u?a:E(g())},j};var m=o("l1xuB"),L=o("3ILHO"),E=o("hhykh"),j=o("jXDaJ"),w=o("1jOZz");o("ieORu");async function x(e){const t=e.target.value.toLowerCase().trim();T((await(0,m.getDataLocalStorage)(E.FAV_COCKTAILS)).filter((e=>e.strDrink.toLowerCase().includes(t))))}function T(e){const{productList:t}=L.refs;0!==e.length?(0,j.renderElementsMarkup)(t,w.markupProductsList,e):t.innerHTML=`<div class="fav-notFound__box">\n  <p class="fav-notFound__message">${"You haven't added any favorite cocktails yet"}</p>\n</div>`}var _=o("1JOti"),C=(L=o("3ILHO"),o("4cN4u"));E=o("hhykh");!async function(){try{T(await(0,m.getDataLocalStorage)(E.FAV_COCKTAILS))}catch(e){(0,j.onReject)(e)}}(),L.refs.inputFavPage[0].addEventListener("input",e(i)(x,E.DEBOUNCE_DELAY)),L.refs.inputFavPage[1].addEventListener("input",e(i)(x,E.DEBOUNCE_DELAY)),L.refs.productList.addEventListener("click",_.renderModalCard),L.refs.checkboxInput.addEventListener("change",C.themeController),(0,C.themeOn)();
//# sourceMappingURL=fav-cocktails.731e10b5.js.map
