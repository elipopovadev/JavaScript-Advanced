function solve(array) {
   array.sort((a, b) => {
    if(a.length  > b.length) { // first criteria
        return 1;
    } else if(a.length === b.length) {
        return a.toLowerCase().localeCompare(b.toLowerCase()); // second criteria
    } else {
        return -1;
    }  
   }) 
      
    return(array.join('\n'));
}

solve(['test', 
'Deny', 
'omen', 
'Default']
)