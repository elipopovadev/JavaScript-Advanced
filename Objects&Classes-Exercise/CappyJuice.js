function solve(array) {
    let juices = [];
    let bottlesOfJuices = [];
    
    for (const line of array) {
        let [juiceName, quantity] = line.split(' => ');
        quantity = Number(quantity);
        if (!juices[juiceName]) {
            juices[juiceName] = quantity;
        } else {
            juices[juiceName] += quantity;
        }

        if (juices[juiceName] >= 1000) {
            let quantity = juices[juiceName];
            let bottles = Math.floor(quantity / 1000);
            juices[juiceName] = quantity % 1000;
            if (!bottlesOfJuices[juiceName]) {
                bottlesOfJuices[juiceName] = bottles;
            } else {
                bottlesOfJuices[juiceName] += bottles;
            }
        }
    }

    for (const [key, value] of Object.entries(bottlesOfJuices)) {
      value > 0 ?  console.log(`${key} => ${value}`) : null; 
      }
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)