// === equality operator
// !== not equal operator
// < less than operator
// > greater than operator
// <= less than or equal operator
// >= greater than or equal operator

let temp = 31;
let isFreezing = temp === 32;

// if(isFreezing){
//     console.log('it is freezing outside');
// }

if(temp <= 32) {
    console.log('It is freezing outside!');
}

if(temp >= 110) {
    console.log('it is way too hot outside!');
    console.log('testing123');
}
// challenge
let age = 26;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(isChild);
console.log(isSenior);