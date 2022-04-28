const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
};

console.log(square(5));

const people = [{
   name: 'Andrew',
   age: 22
},{
    name: 'Vikram',
    age: 50
},{
    name: 'Tim',
    age: 11
}];

// const under30 = people.filter(function (person) {
//     return person.age < 30;
// });

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

// find the age with age 22
const person = people.find((person) => person.age === 22);
console.log(person.name);