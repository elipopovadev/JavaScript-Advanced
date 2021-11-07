function solve() {
    let inputArea = document.querySelectorAll('textarea')[0];
    let generateButton = document.querySelectorAll('button')[0];
    let buyButton = document.querySelectorAll('button')[1];
    let table = document.querySelector('.table');

    generateButton.addEventListener('click', generateTable);
    buyButton.addEventListener('click', buyFurniture);
    

    function generateTable() {
        let furnitures = JSON.parse(inputArea.value);
        furnitures.forEach(currentFurniture => {
            let values = Object.values(currentFurniture);
            for (let i = 0; i < values.length; i += 4) {
                let link = values[i];
                let furniture = values[i + 1];
                let price = values[i + 2];
                let decFactor = values[i + 3];
                var checkBox = ('<input type="checkbox"/>');

                let newRow = table.insertRow(-1);
                let cell1 = newRow.insertCell(0);
                let cell2 = newRow.insertCell(1);
                let cell3 = newRow.insertCell(2);
                let cell4 = newRow.insertCell(3);
                let cell5 = newRow.insertCell(4);

                cell1.innerHTML = `<img src =\"${link}">`;
                cell2.innerHTML = furniture;
                cell3.innerHTML = price;
                cell4.innerHTML = decFactor;
                cell5.innerHTML = checkBox;
            }

            inputArea.value = '';
        })
    }

    function buyFurniture () {
        let allCheckBoxes = document.querySelectorAll('input');
        let allOrderedFurnitures = [];
        for (const box of allCheckBoxes) {
            if (box.checked) {
                let tr = box.parentElement.parentElement;
                let children = tr.childNodes;
                let furnitureName = children[1].innerHTML;
                let price = children[2].innerHTML;
                let decFactor = children[3].innerHTML;

                let furniture = {};
                furniture.name = furnitureName;
                furniture.price = Number(price);
                furniture.decFactor = Number(decFactor);
                allOrderedFurnitures.push(furniture);
            }
        }

        calculateOutput(allOrderedFurnitures);
    }


    function calculateOutput(allOrderedFurnitures) {
                let outputArea = document.querySelectorAll('textarea')[1];
                let boughtFurniture = [];
                let totalPrice = 0;
                let allDecFactors = [];
                for (const furniture of allOrderedFurnitures) {
                    boughtFurniture.push(furniture.name);
                    totalPrice += Number(furniture.price);
                    allDecFactors.push(Number(furniture.decFactor));
                }

                let total = allDecFactors.reduce((a, b) => a + b, 0);
                let averageDecFactor = total / allDecFactors.length;
                outputArea.value += `Bought furniture: ${boughtFurniture.join(', ')} \n`;
                outputArea.value += `Total price: ${totalPrice.toFixed(2)} \n`;
                outputArea.value += `Average decorator factor: ${averageDecFactor} \n`;
                buyButton.disabled = true;
            }
}







