function solve(array) {
    let cars = {};
    array.forEach(row => {
        let [brand, model, numberOfCars] = row.split(' | ');
        numberOfCars = Number(numberOfCars);
        if (!cars[brand]) {
            cars[brand] = [];
            cars[brand].push({ model, numberOfCars });
        } else if (cars[brand] && !cars[brand].some(car => car.model === model)) {
            cars[brand].push({ model, numberOfCars });
        } else {
            let findedCar = cars[brand].find(car => car.model === model);
            findedCar.numberOfCars += Number(numberOfCars);
        }
    });

    for (const [currentBrand, carsCurrentBrand] of Object.entries(cars)) {  // Object.entries
        console.log(currentBrand);
        for (const currentCar of Object.values(carsCurrentBrand)) {  // Object.values
            console.log(`###${currentCar.model} -> ${currentCar.numberOfCars}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])