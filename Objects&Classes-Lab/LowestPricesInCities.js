function solve(input) {
    let products = new Map();

    input.forEach(row => {
        let [town, product, priceText] = row.split(' | ');
        let price = Number(priceText);

        if (!products.get(product)) {
            products.set(product, new Map());
        } 

           products.get(product).set(town, price);           
    })
}


solve(['Sample Town | Orange | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)

