"use strict";
class Employee {
    constructor(code, name) {
        this.display = () => console.log('Employee ' + this.empName);
        this.empName = name;
        this.empCode = code;
    }
}
let emp = new Employee(1, 'Ram');
emp.display(); // Output: 1 Ram
