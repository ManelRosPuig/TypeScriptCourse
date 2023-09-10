"use strict";
// Regular function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
// String interpolation
function printMe(name, age) {
    console.log(`My name is ${name}. I am ${age} years old.`);
}
printMe("John", 20);
// Inline function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
// Default parameter
function add2(a, b = 1) {
    return a + b;
}
console.log(add2(1, 2));
// Spread operator
function add3(...numbers) {
    return numbers.reduce((a, b) => a + b);
}
console.log(add3(1, 2, 3, 4, 5));
console.log(add3(...[1, 2, 3, 4, 5]));
