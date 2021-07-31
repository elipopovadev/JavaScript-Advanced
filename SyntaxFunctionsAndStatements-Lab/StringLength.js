// without 'let' to submit in Judge
let calculateStringLength = (arg1 , arg2 ,arg3)  => { 
 let sumLength = arg1.length + arg2.length + arg3.length;
 let averageSum = Math.floor(sumLength/3);
 console.log(sumLength);
 console.log(averageSum);
}

calculateStringLength('chocolate', 'ice cream', 'cake'); 

