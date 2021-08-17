function solve(array){
    let newArray = array.map(x => x * 2)
                        .reverse();
    let filteredNewArray = newArray.filter((element, index) => index % 2 === 0)
                                   .join(' ');     
    console.log(filteredNewArray);      
}


solve([3, 0, 10, 4, 7, 3]); // 6 8 0