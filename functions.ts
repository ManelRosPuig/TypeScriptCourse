// Regular function
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

// String interpolation
function printMe(name: string, age: number): void {
  console.log(`My name is ${name}. I am ${age} years old.`);
}

printMe("John", 20);

// Inline function
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 3));

// Default parameter
function add2(a: number, b: number = 1): number {
  return a + b;
}

console.log(add2(1, 2));
