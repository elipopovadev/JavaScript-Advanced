let printRectangle = (size = 5) => {
   size = Number(size);
for(let i= 0; i < size; i++){
    console.log(('*' + " ").repeat(size));
}
}

printRectangle(6);