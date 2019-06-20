let firstName = 'David';
let lastName = 'Li';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

//ES5
console.log(firstName + ' ' + lastName + ' is ' + calcAge(yearOfBirth) + ' years old');

//ES6
console.log(`This is ${firstName} ${lastName} and he is ${calcAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('D'));
console.log(n.endsWith('Li'));
console.log(n.includes('av'));
console.log(`${firstName} `.repeat(5));