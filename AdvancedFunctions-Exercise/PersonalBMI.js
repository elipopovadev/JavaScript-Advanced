function solve(name, age, weight, height) {
let object = {
    name: name,
    personalInfo: {
        age: age,
        weight: weight,
        height: height
    },
    BMI: Math.round(weight /(height * height / 10000))
};

object.status = object.BMI < 18.5 ? "underweight" : object.BMI < 25 ? "normal" : object.BMI < 30 ? "overweight" : "obese";
if(object.status == "obese") {
    object.recommendation = "admission required";
}

return object;
}

console.log(solve('Peter', 29, 75, 182));