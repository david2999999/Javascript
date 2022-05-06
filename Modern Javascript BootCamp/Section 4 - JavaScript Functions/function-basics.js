let greetUser = function() {
    console.log('Welcome user!');
};

greetUser();

let square = function (num) {
    return num * num;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

let fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
};

let tempOne = fahrenheitToCelsius(32);
let tempTwo = fahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);