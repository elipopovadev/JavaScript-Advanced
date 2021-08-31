function solve(array) {
    let products = [];
    array.forEach(line => {
        let [productName, productPrice] = line.split(' : ');
        productPrice = Number(productPrice);
        let product = {
            name: productName,
            price: productPrice,
        }

        products.push(product);
    });

    products.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    let currentLetter = '';
    for (const product of products) {
        if (product.name.charAt(0).toUpperCase() === currentLetter) {
            console.log(`  ${product.name}: ${product.price}`)
        } else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])