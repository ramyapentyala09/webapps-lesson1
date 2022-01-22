import * as Elements from './elements.js'

export function addEventListeners() {

Elements.formSearch.addEventListener('submit', e => {
    e.preventDefault();
    const searchKeys = e.target.searchKeys.value.trim();
});
}