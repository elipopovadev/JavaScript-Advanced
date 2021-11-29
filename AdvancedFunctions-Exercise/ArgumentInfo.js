function solve(...arguments) {
    let firstResult = [];
    let secondResult = new Map();
    arguments.map((x) => {
        let type = typeof x;
        firstResult.push(`${type}: ${x}`);  // string: cat
        if (!secondResult.has(type)) {
            secondResult.set(type, 1); // string = 1
        } else {
            secondResult.set(type, secondResult.get(type) + 1); // number = 2
        }
    })

    printFirstResult(firstResult);
    let sortedSecondResult = new Map([...secondResult.entries()].sort((a,b) => b[1] - a[1])) // sort by value
    printSecondResult(sortedSecondResult);


    function printFirstResult (array) {
        array.forEach(element => {
            console.log(element);
        })
    }

    function printSecondResult (map) { // how to print map
        for (let[key,value] of map.entries()) {
            console.log(`${key} = ${value}`);
        }
    }
}


solve('cat', 42, 50, function () { console.log('Hello world!'); })