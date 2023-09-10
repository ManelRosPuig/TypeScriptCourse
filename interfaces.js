"use strict";
class Cat {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log('Cat is moving');
    }
    eat() {
        console.log('Cat is eating');
    }
}
let cat = new Cat('Tom');
cat.move();
cat.eat();
console.log(cat.name);
