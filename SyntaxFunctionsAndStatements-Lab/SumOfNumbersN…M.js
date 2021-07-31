let sumOfNumbers = (arg1, arg2) => {
let num1 = Number(arg1);
let num2 = Number(arg2);
let sum = 0;
for (let i = num1; i <= num2; i++ ) {
    sum += i
}

return sum;
}

console.log(sumOfNumbers('-8', '20'));

