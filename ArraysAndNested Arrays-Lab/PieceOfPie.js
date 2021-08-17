function solve(array, firstString, secondString) {
    let startIndex = array.indexOf(firstString);
    let finalIndex = array.indexOf(secondString);
    let newCloneArray = array.slice(startIndex, finalIndex + 1 );

    console.log(newCloneArray);
}

solve (['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)