function solve(input) {
    let objects = JSON.parse(input);  
    let result = objects.reduce((acc, x) => Object.assign(acc, x), {});    
    console.log(result); 
}

solve(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);

// result is {canMove: true, doors: 4, capacity: 5}