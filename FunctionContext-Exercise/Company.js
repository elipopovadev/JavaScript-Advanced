class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!isValid(username) || !isValid(salary) || !isValid(position) || !isValid(department) || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
            this.departments[department].push({ username, salary, position });
        } else {
            this.departments[department].push({ username, salary, position });
        }
        return `New employee is hired. Name: ${username}. Position: ${position}`;

        function isValid(value) {
            if (value === '' || value === undefined || value === null) {
                return false;
            }
            return true;
        }
    }

    bestDepartment() {
        let maxSalary = 0;
        let bestDepartmentWithMaxSalary;
        for (const departmentsName in this.departments) {
            let totalSalaryInDepartment = this.departments[departmentsName].map(employee => employee.salary).reduce((a, b) => a + b, 0);
            let averageSalaryInDepartment = totalSalaryInDepartment / this.departments[departmentsName].length;
            if (averageSalaryInDepartment > maxSalary) {
                maxSalary = averageSalaryInDepartment;
                bestDepartmentWithMaxSalary = departmentsName;
            }
        }

        let sortedBestDepartment = this.departments[bestDepartmentWithMaxSalary].sort((a, b) => a.username.localeCompare(b.username))
            .sort((a, b) => b.salary - a.salary);
        let result = `Best Department is: ${bestDepartmentWithMaxSalary}\n`;
        result += `Average salary: ${maxSalary.toFixed(2)}\n`;
        result += sortedBestDepartment
            .map(obj => Object.values(obj).join(' '))
            .join('\n');
        return result
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
