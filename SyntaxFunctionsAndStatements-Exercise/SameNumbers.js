function checkForTheSameDigits(input){
    input = String(input);
    let areTheSame = true;
    let sum = 0;

    for(let i = 0; i < input.length - 1; i++ ){
     if(input[i] !== input[i+1]){
         areTheSame = false;       
     }    

     sum += Number(input[i]);
    }

    sum += Number(input[input.length-1]);
    console.log(areTheSame);
    console.log(sum);
}

checkForTheSameDigits(1234)