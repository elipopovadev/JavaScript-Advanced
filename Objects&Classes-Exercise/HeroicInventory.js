function solve(array) {
    let result = [];
    for (const line of array) {
        let [heroName, heroLevel, items] = line.split(' / ');
        heroLevel = Number(heroLevel);
        items = items ? items.split(', ') : [];
        hero = {
            name: heroName,
            level: heroLevel,
            items: items,
        }

        result.push((hero));
    }

    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);