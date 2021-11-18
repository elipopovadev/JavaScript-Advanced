class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!isValid(username) || !isValid(salary) || !isValid(position) || !isValid(department) || salary < 0) {
            throw new Error("Invalid input!");
        }
        let newEmployee = new Employee(username, salary, position, department);
        if(!this.departments[department]) {
            this.departments[department] = [];
            this.departments[department].push(newEmployee);
        } else {
            this.departments[department].push(newEmployee);
        }
    }

    bestDepartment () {

    }

    isValid(value) {
        if (value === '' || value === undefined || value === null) {
            return false;
        }
        return true;  
    }
}


class Employee {
    constructor(username, salary, position, department) {
        this.username = username;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
