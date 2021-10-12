function solve() {
    let number = document.getElementById("input");
    let selectTo = document.getElementById("selectMenuTo");
    let result = document.getElementById("result");
    let buttonConvert = document.querySelector(("#container button"));

    addOption();

    function addOption() {
        let binaryOption = document.createElement("option");
        binaryOption.value = "binary";
        binaryOption.innerHTML = "Binary";
        selectTo.appendChild(binaryOption);
        let hexadecimalOption = document.createElement("option");
        hexadecimalOption.value = "hexadecimal";
        hexadecimalOption.innerHTML = "Hexadecimal";
        selectTo.appendChild(hexadecimalOption);
    }

    buttonConvert.addEventListener('click', () => {
        let num = Number(number.value);
        if (selectTo.value === "binary") {
            if (num >= 0) {
                result.value = num.toString(2);
                number.value ='';
            } else if(num < 0) {
                result.value = (num >>> 0).toString(2);
                number.value ='';
            }

        } else if (selectTo.value === "hexadecimal") {
            hexString = num.toString(16).toUpperCase();
            result.value = hexString;
            number.value = '';
        }
    })
}
