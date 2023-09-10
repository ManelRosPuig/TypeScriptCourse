"use strict";
let user;
user = 'John';
user = user.toUpperCase();
let age;
age = 30;
let isMarried;
isMarried = false;
let hobbies;
hobbies = ['Sports', 'Cooking'];
let person;
person = {
    name: 'John',
    age: 30,
    isMarried: false,
    hobbies: ['Sports', 'Cooking']
};
let people;
people = [
    {
        name: 'John',
        age: 30,
        isMarried: false,
        hobbies: ['Sports', 'Cooking']
    },
    {
        name: 'Jane',
        age: 30,
        isMarried: false,
        hobbies: ['Sports', 'Cooking']
    }
];
console.log(people[0].name);
console.log(people[0].age);
console.log(people[0].isMarried);
console.log(people[0].hobbies);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function add(a, b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
print(add(1, 2));
