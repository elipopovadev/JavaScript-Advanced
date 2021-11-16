function arrayMap(arr, func) {
    return arr.reduce(function (acc, x) {
        acc.push(func(x));
        return acc;
    }, [])
}

let nums = [1, 2, 3, 4, 5];
let mappedArray = arrayMap(nums(x => x * 2));
console.log(mappedArray); // [ 2, 4, 6, 8, 10 ]
