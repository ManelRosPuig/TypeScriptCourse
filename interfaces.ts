interface Movable {
    move(): void;
}

interface Eatable {
    eat(): void;
}

interface Animal extends Movable, Eatable {
    name: string;
}

class Cat implements Animal {
    
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    move(): void {
        console.log('Cat is moving');
    }
    
    eat(): void {
        console.log('Cat is eating');
    }
}

let cat = new Cat('Tom');
cat.move();
cat.eat();
console.log(cat.name);
