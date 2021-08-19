function solve(array) {
    array.sort((a, b) => a - b);
    let newArray = [];
    while (array.length !== 0) {
        newArray.push(array[0]);
        array.shift();
        if (array.length !== 0) {
            newArray.push(array[array.length - 1]);
            array.pop();
        }
    }

    return (newArray);
}   

solve([1, 3, 52, 48, 63, 31, -3, 18, 56])