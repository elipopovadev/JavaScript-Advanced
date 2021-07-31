let calcCircleArea = (arg1) => {
    let circleArea;
    let type = typeof(arg1);
    if(type === 'number'){
        let r = arg1;
        circleArea = Math.PI * r**2;
      console.log(circleArea.toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

calcCircleArea(5);