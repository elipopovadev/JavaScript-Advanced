function solve(matrix){
    let sumFirstDiagonal = 0

    for (let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++){
            sumFirstDiagonal += matrix[row][row];
            break;
        }       
    }

    let sumSecondDiagonal = 0;
    
    for (let row = 0; row < matrix.length; row++) {
        for(let col = matrix[row].length -1; col >= 0; col--){
            sumSecondDiagonal += matrix[row][col - row];
            break;
        }       
    }

    console.log(sumFirstDiagonal + ' ' + sumSecondDiagonal);
}

solve ([[20, 40],
    [10, 60]])
