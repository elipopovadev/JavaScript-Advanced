function solve(text) {
    let result = text.toUpperCase()
      .match(/\w+/g) // \w+ and g to match every word; / .... / is for regEx; i is for capital insensitive; /[^9]/ - match everything except 9
      .join(', ');
      
    console.log(result);
}

solve('Hi, how are you?')


