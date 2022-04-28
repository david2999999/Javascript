// ES5

var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);


// ES6

const name6 = 'Jane Smith';
let age6 = 23;

// this code will have an error because name6 is a constant value
// name6 = 'Jane Miller';
// console.log(name6);




//ES5
function driverLicense5(passedTest) {
    if(passedTest){
        var firstName = 'David';
        var yearOfBirth = 1990;

        console.log(firstName + ' ' + yearOfBirth);
    }
}

driverLicense(true);


// ES6
function driverLicense6(passedTest) {
    if(passedTest){
        let firstName = 'David';
        const yearOfBirth = 1990;
    }

    // this console statement will not work
    // let and const uses block scope
    // whereas var uses function scope
    //  console.log(firstName + ' ' + yearOfBirth);
}

driverLicense6(true);





let i = 23;

for(let i = 0; i < 5; i++){     // prints 1 - 4
    console.log(i);
}

console.log(i);     // prints out 23

// the i inside the for loop is in a different block scope
// so the original value of i of 23 is not affected









