function solution (input1) {
    let number1 = Number(input1);

    return function (input2) {
        let number2 = Number(input2);
        let result = number1 + number2;
        return result;
    }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
