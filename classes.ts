class Employee {
    empCode: number;
    empName: string;
    
    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }
    
    display() : void {
        console.log(`Employee ${this.empName}`)
    } 

    // Getters
    get code() : number {
        return this.empCode;
    }

    // Setters
    set code(code: number) {
        this.empCode = code;
    }

    // Static methods
    static getEmployeeName() : string {
        return 'Ram';
    }
}

let emp = new Employee(1, 'Ram');
emp.display();