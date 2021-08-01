let aggregateElements = (...array) => {
    let numbersArray = array.map(Number);
    let sum = numbersArray.reduce((a, b) => a + b);
    let inverseValue = numbersArray.reduce((a, b) => 1/a + 1/b);
    let stringConcat = numbersArray.join('');

    console.log(sum);
    console.log(inverseValue.toFixed(4));
    console.log(stringConcat);
}

aggregateElements(2, 4, 8, 16);