
// calculateAge will be executed because of hoisting
calculateAge(1965);

// this is a function declaration
function calculateAge(year){
    console.log(2016 - year);
}


// retirement(1956);
// the code above can not be executed because
// the retirement function is a function expression
var retirement = function(year){
    console.log(65 - (2016 - year));
}

///////////////////////////////////////////////

// the code scans for variable declarations and set to undefined
// if there is no declaration of the variable. It will result in an error
console.log(age);
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age2 = 23;
    console.log(age2);
}

foo();
console.log(age);