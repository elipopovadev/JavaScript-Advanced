function solve(text) {
    let result = text.toUpperCase()
      .match(/\w+/g) // /g to match every word
      .join(', ');
      
    console.log(result);
}

solve('Hi, how are you?')


