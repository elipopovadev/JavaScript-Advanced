class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    get firstName() {
        return this.first;
    }

    set firstName(value) {
        return this.first = value;
    }

    get lastName() {
        return this.last;
    }

    set lastName(value) {
        return this.last = value;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        let [first, last] = value.split(' ');
        if (first !== undefined && last !== undefined) {
            this.first = first;
            this.last = last;
            return `${this.firstName} ${this.lastName}`;
        }   
    }
}

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName); // Simon
console.log(person.lastName); // Simpson
