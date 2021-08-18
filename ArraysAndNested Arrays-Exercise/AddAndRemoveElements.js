function solve(array) {
    let outputArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] === "add") {
            outputArray.push(index + 1);
        } else if (array[index] === "remove") {
            outputArray.pop();
        }
    }

  outputArray.length == 0 ? console.log("Empty") : console.log(outputArray.join("\n"));
}

solve (['add', 
'add', 
'remove', 
'add', 
'add'])