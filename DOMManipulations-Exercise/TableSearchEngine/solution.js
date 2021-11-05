function solve() {
    let searchButton = document.getElementById('searchBtn');
    let searchField = document.getElementById('searchField')
  
    searchButton.addEventListener('click', function () { 
        let searchFieledValue = searchField.value.toLowerCase();    
        removeSelectedRow();
        selectFindedRow(searchFieledValue);
    })


    function removeSelectedRow() {
        let selectedRows = document.getElementsByClassName('select');
        while (selectedRows.length > 0) {
            selectedRows[0].classList.remove('select');
        }
    }
    
    function selectFindedRow(searchFieldValue) {
        searchField.value = '';
        let tableData = document.querySelectorAll('tbody td');
        for (const td of tableData) {
            if (td.innerHTML.toLowerCase().indexOf(searchFieldValue) !== -1) {
                let row = td.parentElement;
                row.classList.add('select');
            }
        }
    }
}