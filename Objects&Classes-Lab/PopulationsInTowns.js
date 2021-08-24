function solve(array) {
    let towns = {};

    array.forEach(row => {
        let currentElements = row.split(' <-> ');
        let town = currentElements[0];
        let population = Number(currentElements[1]);

        if (!towns.hasOwnProperty(town)) {
            towns[town] = population;
        } else {
            towns[town] += population;
        }
    });

   Object.keys(towns).forEach(town => console.log(`${town} : ${towns[town]}`));
}

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)