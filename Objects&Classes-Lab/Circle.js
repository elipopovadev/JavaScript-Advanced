class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        let diameter = this.radius * 2;
        return diameter;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        let area = Math.PI * Math.pow(this.radius, 2);
        return area;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);