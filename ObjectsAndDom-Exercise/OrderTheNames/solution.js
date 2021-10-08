function solve() {
    let button = document.querySelector("button");
    let listItems = document.querySelectorAll("li");
    let input = document.querySelector("input");

    button.addEventListener('click', functionOrderNameInDB);
    function functionOrderNameInDB() {
        let inputValue = document.getElementsByTagName("input")[0].value;
        let number = Number(inputValue.toUpperCase().charCodeAt(0) - 65);
        if (listItems[number].innerHTML === '') {
            listItems[number].innerHTML += inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
        } else {
            listItems[number].innerHTML += ", " + inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
        }
        input.value ='';
    }
}
