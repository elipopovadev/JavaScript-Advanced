function solve() {
    let tBody = document.getElementsByTagName('tbody')[0];
    let trArray = Array.from(document.getElementsByTagName('tr'));
    tBody.addEventListener('click', e => {
        let target = e.target;
        let currentRow = target.parentElement;
        if (currentRow.getAttribute("style") == null || currentRow.getAttribute("style") == "") {
            trArray.map(tr => tr.removeAttribute('style'));
            currentRow.style.backgroundColor = "#413f5e";

        } else {
            currentRow.removeAttribute('style');
        }
    })
}