function solution() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipe = {
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
            return cook(product, quantity);
        } else if (command == 'report') {
            return returnReport(storage);
        }
    }


    function cook(product, quantity) {
        let result = 'Success';
        for (let key in recipe[product]) {
            if (recipe[product][key] * quantity > storage[key]) {
                result = `Error: not enough ${key} in stock`;
                return result;
            }
        }

        Object.keys(recipe[product]).map((key) => storage[key] -= (recipe[product][key] * quantity));
        return result;
    }

    function returnReport(storage) {
        return Object.keys(storage).map((key) => { return `${key}=${storage[key]}` }).join(' ');
    }
}


let manager = solution();
console.log(manager('restock protein 100'))
console.log(manager('restock carbohydrate 100'))
console.log(manager('restock fat 100'))
console.log(manager("restock flavour 100"))
console.log(manager("report"))
console.log(manager('prepare apple 2'))
console.log(manager('report'))
console.log(manager("prepare apple 1"))
console.log(manager("report"))





