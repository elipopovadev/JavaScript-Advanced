function cookingByNumbers(number, ...arguments) {
    number = Number(number);
    for (let i = 0; i < arguments.length; i++) {
        switch (arguments[i]) {
            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number = number + 1;
                break;
            case 'bake':
                number = number * 3;
                break;
            case 'fillet':
                number = (number * 0.8).toFixed(1);               
                break;
            default: break;
        }
        console.log(number);
    }
}

cookingByNumbers ('9', 'dice', 'spice', 'chop', 'bake', 'fillet')