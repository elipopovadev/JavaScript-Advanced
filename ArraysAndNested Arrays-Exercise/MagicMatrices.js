function solve(matrix){
    let arrayForRows = [];
    let sumRow = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
           sumRow+= matrix[row][col];          
        }

        arrayForRows.push(sumRow);
        sumRow = 0;       
    }

    let arrayForCols = [];
    let sumCol = 0;
    for (let col = 0; col < matrix[0].length; col++) {
       for (let row = 0; row < matrix.length; row++) {
          sumCol+= matrix[row][col];
       }

       arrayForCols.push(sumCol);
        sumCol = 0;
    }

    let concatArray = arrayForRows.concat(arrayForCols);
    console.log(concatArray.every(x => x === concatArray[0])); 
}

solve ([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )