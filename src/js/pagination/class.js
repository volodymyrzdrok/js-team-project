import { renderElementsMarkup } from '../utils/utils';
import { markupProductsList } from '../templates/markupSearchingCocktails';
import { refs } from '../refs/refs';
import Pagination from 'tui-pagination';
import sprite from '../../images/svgs.svg'

const container = document.getElementById('tui-pagination-container');
let pagination = null;
let currentPage = 1;
let rowsPerPage = perPage();

const options = {
  totalItems: 0,
  itemsPerPage: rowsPerPage,
  visiblePages: 3,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
              '<span class="tui-page-btn tui-{{type}}">' +
                 `<svg class="tui-ico" width="24px" height="24px"><use href="${sprite}#icon-arrow-right"></use></svg>` +
             '</span>',
         disabledMoveButton:
             '<span class="tui-page-btn  tui-{{type}}">' +
                 `<svg class="tui-ico tui-is-disabled" width="24px" height="24px"><use href="${sprite}#icon-arrow-left"></use></svg>` +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
};


export function renderMarkupList(data, togglePag) {
  let paginatedData = data.filter((elem, index) => {
    const start = rowsPerPage * (currentPage - 1);
    const end = start + rowsPerPage;
    if (index >= start && index < end) return true;
  });

    const totalPage = Math.ceil(data.length / rowsPerPage)

    renderElementsMarkup(refs.productList, markupProductsList, paginatedData);
  if (togglePag === 'first') pagination = null;
  if (!pagination) {
    options.totalItems = data.length;
    totalPage > 1 && displayPagination(data);
  }
}

function displayPagination(data) {
  currentPage = 1;

  pagination = new Pagination(container, options);
  pagination.on('afterMove', event => {
    currentPage = event.page;
    renderMarkupList(data);
  });
}



function perPage() {
  if (window.outerWidth < 745) {
    return 3;
  }
  if (window.outerWidth >= 745 && window.outerWidth < 1290) {
    return 6;
  } else return 9;
}