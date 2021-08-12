function solve(array){
    let negativeArray = array.filter(element => element < 0)
                             . reverse();
    let positiveArray = array.filter(element => element >= 0);
    let concatArray = negativeArray.concat(positiveArray);

    concatArray.forEach(element => console.log(element));
}

solve([3, -2, 0, -1]);