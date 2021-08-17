function solve(array){
    array.sort((a,b) => a - b);
    newArray =[];
    for (let index = Math.floor(array.length / 2); index < array.length; index++) {
       
        newArray.push(array[index])
    }
    
    console.log(newArray);
    }

    solve([3, 19, 14, 7, 2, 19, 6])