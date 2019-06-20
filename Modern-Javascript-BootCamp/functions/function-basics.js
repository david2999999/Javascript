// function - input, code, output

let greetUser = function () {
    console.log('Welcome user');
};

greetUser();

let square = function (num) {
    let result = num * num;

    return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);


// challenge
// convertFahrenheitToCelcius

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celcius = (fahrenheit - 32)  * 5 / 9;

    return celcius;
};

let tempOne = convertFahrenheitToCelcius(32);
let tempTwo = convertFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);


