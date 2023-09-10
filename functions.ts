function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

function printMe(name: string, age: number): void {
  console.log(`My name is ${name}. I am ${age} years old.`);
}

printMe("John", 20);

const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 3));
