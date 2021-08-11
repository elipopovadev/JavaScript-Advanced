function findEvenPositionElement(array){
   let newArray = array.filter((element, index) => index % 2 === 0)
                       .join(' ');

   console.log(newArray);
}

findEvenPositionElement(['20', '30', '40', '50', '60']);