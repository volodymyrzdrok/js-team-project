!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired870;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired870=a);var s=a("cqmI4"),i=a("bpxeT"),c=a("2TvXO"),o=a("1X4Nb"),u=(s=a("cqmI4"),a("4apOK"));a("e5Gor");var d=a("5mnqR"),l=a("c48vr");function f(e){return p.apply(this,arguments)}function p(){return(p=e(i)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=r.currentTarget.searchCocktailName.value.trim()){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,(0,o.fetchProductsByName)(n);case 7:v(e.sent.drinks),r.target.reset(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),(0,d.onReject)(e.t0);case 15:case"end":return e.stop()}}),t,null,[[4,12]])})))).apply(this,arguments)}function v(e){var t=s.refs.productTitle,r=s.refs.productList;if((0,d.scrollSmoth)(".js-product__list"),!e)return t.textContent="Sorry, we didn't find any cocktail for you",void(r.innerHTML=u.imgNotFound);t.textContent="Searching results",(0,l.renderMarkupList)(e,"first")}i=a("bpxeT"),c=a("2TvXO"),s=a("cqmI4"),o=a("1X4Nb");var h=a("e5Gor"),m=(d=a("5mnqR"),a("9l38W")),k=3;function b(){return(b=e(i)(e(c).mark((function t(){var r,n,a,i,u,l,f,p,v,m;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for((0,d.hideELements)(s.refs.spinnerEl,!1),r=[],n=0;n<k;n++)r.push((0,o.fetchProductsRandom)());return e.next=5,Promise.all(r);case 5:for(a=e.sent,i=[],u=!0,l=!1,f=void 0,e.prev=8,p=a[Symbol.iterator]();!(u=(v=p.next()).done);u=!0)m=v.value,i.push(m.drinks[0]);e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),l=!0,f=e.t0;case 16:e.prev=16,e.prev=17,u||null==p.return||p.return();case 19:if(e.prev=19,!l){e.next=22;break}throw f;case 22:return e.finish(19);case 23:return e.finish(16);case 24:(0,d.renderElementsMarkup)(s.refs.productList,h.markupProductsList,i),(0,d.hideELements)(s.refs.spinnerEl,!0);case 26:case"end":return e.stop()}}),t,null,[[8,12,16,24],[17,,19,23]])})))).apply(this,arguments)}m.clientWidth>=745&&(k=6),m.clientWidth>=1280&&(k=9);i=a("bpxeT"),c=a("2TvXO"),d=a("5mnqR"),o=a("1X4Nb"),s=a("cqmI4");a("e5Gor");u=a("4apOK"),l=a("c48vr"),m=a("9l38W");function x(){return(x=e(i)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.target.hasAttribute("data-letter")){e.next=3;break}return e.abrupt("return");case 3:return m.clientWidth<745&&(r.target.classList.add("keyboard__cstm-input--active"),r.target.parentNode.classList.add("keyboard__cstm-summary--active"),document.querySelector(".keyboard__cstm-select").open=!1),n=r.target.getAttribute("data-letter").trim(),e.prev=5,e.next=8,(0,o.fetchProductsByLetter)(n);case 8:L(e.sent.drinks),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),(0,d.onReject)(e.t0);case 15:case"end":return e.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}function L(e){var t=s.refs.productTitle,r=s.refs.productList;if((0,d.scrollSmoth)(".js-product__list"),!e)return t.textContent="Sorry, we didn't find any cocktail for you",void(r.innerHTML=u.imgNotFound);t.textContent="Searching results",(0,l.renderMarkupList)(e,"first")}var y=a("1mlpE"),g=a("6NBv3");a("aYCZG"),a("6bVTN"),a("5lA0Z");var E=a("yeYqT"),T=a("KzHW3");!function(){b.apply(this,arguments)}(),s.refs.searchCocktailsInput[0].addEventListener("submit",f),s.refs.searchCocktailsInput[1].addEventListener("submit",f),s.refs.lettersContainer.addEventListener("click",(function(e){return x.apply(this,arguments)})),s.refs.productList.addEventListener("click",y.renderModalCard),s.refs.checkboxInput[0].addEventListener("change",g.themeController),s.refs.checkboxInput[1].addEventListener("change",g.themeController),(0,g.themeOn)(),s.refsMenu.favorites.addEventListener("click",E.authController),s.refsMenu.favoritesMobile.addEventListener("click",E.authController),(0,E.checkUserAuth)(),s.refsSign.logIn.addEventListener("click",T.onLogInAuth),s.refsSign.logOut.addEventListener("click",T.onLogOutAuth)}();
//# sourceMappingURL=index.b70c8492.js.map
