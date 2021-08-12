function solve(array){
    array.sort((a, b) => a - b);

    console.log(array[0] + ' ' + array[1]);
}

solve([3, 0, 10, 4, 7, 3])