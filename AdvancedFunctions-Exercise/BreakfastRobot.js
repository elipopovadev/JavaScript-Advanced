function solution() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function (text) {
        let input = text.split(' ');
        let command = input[0];
        if (command == 'restock') {
            let ingredient = input[1];
            let quantity = Number(input[2]);
            storage[ingredient] += quantity;
            return 'Success';
        } else if (command == 'prepare') {
            let product = input[1];
            let quantity = input[2];
            return (cook(product, storage, quantity));
        } else if (command == 'report') {
            return returnReport(storage);
        }
    }


    function cook(product, storage, quantity) {
        let result = 'Success';
        let totalNeededIngredients = new Map();
        let ingredientsNeededPerOneProduct = products[product];
        for (let ingredient in ingredientsNeededPerOneProduct) {
            totalNeededIngredients.set(ingredient, ingredientsNeededPerOneProduct[ingredient] * quantity);
        }

        for (const ingredient in storage) {
            if (totalNeededIngredients.get(ingredient) > storage[ingredient]) {
                result = `Error: not enough ${ingredient} in stock`;
                return result;
            }
        }
       
        for (let [key,value] of totalNeededIngredients.entries()) {
            storage[key]-= value;
        }

        return result;
    }

    function returnReport(storage) {
        return Object.keys(storage).map((key) => { return `${key}=${storage[key]}` }).join(' ');
    }
}


let manager = solution();
console.log(manager('restock carbohydrate 10')) 
console.log(manager('restock flavour 10')) 
console.log(manager('prepare apple 1')) 
console.log(manager("restock fat 10")) 
console.log(manager("prepare burger 1")) 
console.log(manager("report"))


 

