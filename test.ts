let user : string;
user = 'John';
user = user.toUpperCase();

let age : number;
age = 30;

let isMarried : boolean;
isMarried = false;

let hobbies : string[];
hobbies = ['Sports', 'Cooking'];

let person : {
    name: string;
    age: number;
    isMarried: boolean;
    hobbies: string[];
};

person = {
    name: 'John',
    age: 30,
    isMarried: false,
    hobbies: ['Sports', 'Cooking']
};

let people : {
    name: string;
    age: number;
    isMarried: boolean;
    hobbies: string[];
}[];

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

enum Color {
    Red,
    Green,
    Blue
}
