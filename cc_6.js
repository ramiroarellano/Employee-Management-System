 class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
 }
 
 class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${super.describe()} They manage a team of ${this.teamSize} people.`;
    }
 }

 const employee1 = new Employee("Alice", "Engineering");
 const employee2 = new Employee("Bob", "Marketing");
 const manager1 = new Manager("Charlie", "Engineering", 5);
 const manager2 = new Manager("Diana", "Marketing", 3);  


 class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        return this.employees.map(emp => emp.describe()).join("\n");
    }
 }
 
 const company = new Company();
 company.addEmployee(employee1);
 company.addEmployee(employee2);
 company.addEmployee(manager1);
 company.addEmployee(manager2);      
 console.log(company.listEmployees());   


