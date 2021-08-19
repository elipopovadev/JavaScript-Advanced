function extract(array) {
    let max = Number.MIN_SAFE_INTEGER;
    let newArray = array.filter(number => {
        if (number > max) {
            max = number;
            return true;
        } else {
            return false;
        }
    });

    return(newArray);
}

extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]    
    )