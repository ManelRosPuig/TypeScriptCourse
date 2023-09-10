class Employee {
    empCode: number;
    empName: string;
    
    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }
    
    display = (): void => console.log('Employee ' + this.empName)
}

let emp = new Employee(1, 'Ram');
emp.display(); // Output: Employee Ram