//ES5
var david = ['david', 29];
// var name = david[0];
// var age = david[1];

//ES6
const [name, age] = ['david', 20];
console.log(name);
console.log(age);



const obj = {
    firstName: 'David',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);


const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(2000);
console.log(age2);
console.log(retirement);














