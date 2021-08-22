// result [{"Town":"Sofia",
// "Latitude":42.7,
// "Longitude":23.32
// },
// {"Town":"Beijing", 
// "Latitude":39.91, 
//"Longitude":116.36
// }]

function solve(arrayOfStrings) { // from stringArray
    arrayOfStrings.shift(); // to remove first line of the array

    let newJSONArray = [];
    for (const element of arrayOfStrings) {
        let [empty, townName, lati, longi] = element.split('|');
        let townObject = { // create js object
            Town: townName.trim(),
            Latitude: Number(Number(lati).toFixed(2)),
            Longitude: Number(Number(longi).toFixed(2)),
        }

        newJSONArray.push(JSON.stringify(townObject)); // JSON.stringify
    }

  return(newJSONArray.join(',\n'))
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)


