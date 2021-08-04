
function calculatePrice (typeFruit, weightIngr, pricePerkg){
    let weightInkg = weightIngr/1000;
    let money = weightInkg * pricePerkg;
    
    console.log(`I need $${(money.toFixed(2))} to buy ${(weightInkg).toFixed(2)} kilograms ${typeFruit}.`)
}

calculatePrice('orange', 2500, 1.80);