function solve(input) {
    let result = [];

    let listBuilder = {
        add: string => result.push(string),
        remove: string => result = result.filter(x => x !== string),
        print: () => console.log(result.join(",")),
    }

    return input.forEach(element => {
        let newElement = element.split(" ");
        let [command, string] = newElement;
        listBuilder[command](string);
    })
}

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])