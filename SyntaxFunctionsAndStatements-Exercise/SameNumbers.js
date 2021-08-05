function checkForTheSameDigits(input){
    input = String(input);
    let areTheSame = true;
    let sum = 0;

    let firstDigit = input[0];
    for(let i = 0; i < input.length; i++ ){
     if(input[i] !== firstDigit) {
         areTheSame = false;       
     }
     sum += Number(input[i]);
    }

    console.log(areTheSame);
    console.log(sum);
}

checkForTheSameDigits(2222)