import { renderElementsMarkup } from '../utils/utils';
import { markupProductsList } from '../templates/markupSearchingCocktails';
import { refs } from '../refs/refs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('tui-pagination-container');

    let currentPage = 1;
    let rowsPerPage = perPage()
    
    
export function renderMarkupList(data) {
        
        let paginatedData = data.filter((elem, index) => {
            const start = rowsPerPage * (currentPage - 1);
            const end = start + rowsPerPage;
            if (index >= start && index < end) return true;
        })
        console.log('paginatedData :>> ', paginatedData);
        
        renderElementsMarkup(refs.productList, markupProductsList, paginatedData);
        displayPagination(data)
    }
    
   let pagination = null 
    
function displayPagination(data) {
    currentPage = 1;
    
        const options = {
            totalItems: data.length,
            itemsPerPage: rowsPerPage,
            visiblePages: 3,
            page: 1,
            centerAlign: false,
            firstItemClassName: 'tui-first-child',
            lastItemClassName: 'tui-last-child',
        }
        if(!pagination) pagination = new Pagination(container, options);
    }
    

    pagination.on('afterMove', (event) => {
            currentPage = event.page;
            console.log('currentPage :>> ', currentPage);
            renderMarkupList();
        });
    
    function perPage() {
        if (window.outerWidth < 745) {
            return 3;
        }
        if (window.outerWidth >= 745 && window.outerWidth < 1290) {
            return 6;
        } else return 9;
    }
    
    






