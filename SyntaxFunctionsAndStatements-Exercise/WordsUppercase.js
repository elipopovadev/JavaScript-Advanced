function solve(text) {
    let result = text.toUpperCase()
      .match(/\w+/g) // \w+ and g to match every word; / .... / is for regEx
      .join(', ');
      
    console.log(result);
}

solve('Hi, how are you?')


