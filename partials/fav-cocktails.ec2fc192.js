function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired870;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired870=i);var o,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,v=l||d||Function("return this")(),p=Object.prototype.toString,h=Math.max,g=Math.min,y=function(){return v.Date.now()};function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(L(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=L(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):u.test(e)?NaN:+e}o=function(e,t,n){var r,i,o,a,u,f,c=0,s=!1,l=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){return c=e,u=setTimeout(E,t),s?v(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||l&&e-c>=o}function E(){var e=y();if(O(e))return m(e);u=setTimeout(E,function(e){var n=t-(e-f);return l?g(n,o-(e-c)):n}(e))}function m(e){return u=void 0,d&&r?v(e):(r=i=void 0,a)}function x(){var e=y(),n=O(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return p(f);if(l)return u=setTimeout(E,t),v(f)}return void 0===u&&(u=setTimeout(E,t)),a}return t=b(t)||0,L(n)&&(s=!!n.leading,o=(l="maxWait"in n)?h(b(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},x.flush=function(){return void 0===u?a:m(y())},x};var O=i("l1xuB"),E=i("3ILHO"),m=i("hhykh"),x=i("jXDaJ"),j=i("3oRRH"),C=i("6qXxx");async function k(e){const t=e.target.value.toLowerCase().trim();w((await(0,O.getDataLocalStorage)(m.FAV_COCKTAILS)).filter((e=>e.strDrink.toLowerCase().includes(t))))}function w(e){const{productList:t}=E.refs;if(0===e.length)return t.innerHTML=(0,j.favMessage)("You haven't added any favorite cocktails yet"),void(0,C.resetPagination)();(0,C.renderMarkupList)(e,"first")}var T=i("1JOti"),D=(E=i("3ILHO"),i("4cN4u"));m=i("hhykh");i("dYj0p"),i("cJYoO"),i("3ByQX");var M=i("3j6Sd"),A=i("4me76");!async function(){try{w(await(0,O.getDataLocalStorage)(m.FAV_COCKTAILS))}catch(e){(0,x.onReject)(e)}}(),E.refs.inputFavPage[0].addEventListener("input",e(o)(k,m.DEBOUNCE_DELAY)),E.refs.inputFavPage[1].addEventListener("input",e(o)(k,m.DEBOUNCE_DELAY)),E.refs.productList.addEventListener("click",T.renderModalCard),E.refs.checkboxInput[0].addEventListener("change",D.themeController),E.refs.checkboxInput[1].addEventListener("change",D.themeController),(0,D.themeOn)(),E.refsMenu.favorites.addEventListener("click",M.authController),E.refsMenu.favoritesMobile.addEventListener("click",M.authController),(0,M.checkUserAuth)(),E.refsSign.logIn.addEventListener("click",A.onLogInAuth),E.refsSign.logOut.addEventListener("click",A.onLogOutAuth);
//# sourceMappingURL=fav-cocktails.ec2fc192.js.map