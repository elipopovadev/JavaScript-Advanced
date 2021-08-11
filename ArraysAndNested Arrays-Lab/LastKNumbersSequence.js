function solve(n, k){
   n = Number(n);
   k = Number(k);
   let array = [1];

    for (let index = 1; index <= n - 1; index++) {
        let newElement = 0;
        for (let i = index - 1; i >= Math.max(0, index - k); i--) {
           
            newElement += array[i];           
        }

        array.push(newElement);        
    }

    let newArray = array.map(x => Number(x));

    console.log(newArray.join(', '));
}

solve(8, 2)