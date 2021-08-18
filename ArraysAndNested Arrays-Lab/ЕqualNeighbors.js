function calculateEqualPairs(matrix) {
    let pairs = 0;
    for (let row = 0; row <= matrix.length - 1; row++) {
        for (let col = 0; col <= matrix[row].length - 1; col++) {
            if (row + 1 <= matrix.length - 1)
                if (matrix[row][col] === matrix[row + 1][col]) {
                    pairs++;
                }

            if (col + 1 <= matrix[row].length - 1)
                if (matrix[row][col] === matrix[row][col + 1]) {
                    pairs++;
                }
        }
    }
    
    return(pairs);
}
    
calculateEqualPairs([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)