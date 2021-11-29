function solve(input, criteria) {

    let sortFunction = {
        asc: function (array) { return array.sort((a, b) => a - b) },
        desc: function (array) { return array.sort((a, b) => b - a) },
    }
    return sortFunction[criteria](input);
}

console.log(solve([14, 7, 17, 6, 8], 'desc'))