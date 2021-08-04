function calculateGCD(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b){
            a = a - b;
        }           
        else {
            b = b - a;
        }        
    }

    console.log(a);
}
  calculateGCD(15, 5)
