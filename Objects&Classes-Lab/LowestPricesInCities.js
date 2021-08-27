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


    let result = [];
    for (const productWithValueTownPrices of products) {
        let towns = [...productWithValueTownPrices[1]]; // spread into new area
        let firstTownWithPrice = towns.sort((a, b) => a[1] - b[1]) [0]; // take first town after sorted by price
        result.push(`${productWithValueTownPrices[0]} -> ${firstTownWithPrice[1]} (${firstTownWithPrice[0]})`); // print 'product -> price (town)'
    }

    console.log(result.join('\n'));
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'
]
)

