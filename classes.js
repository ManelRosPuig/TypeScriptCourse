"use strict";
class Employee {
    constructor(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    display() {
        console.log(`Employee ${this.empName}`);
    }
    // Getters
    get code() {
        return this.empCode;
    }
    // Setters
    set code(code) {
        this.empCode = code;
    }
    // Static methods
    static getEmployeeName() {
        return 'Ram';
    }
}
let emp = new Employee(1, 'Ram');
emp.display();
