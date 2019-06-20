let name = 'jen';

if(name === undefined){
    console.log('Please provide a name');
}else{
    console.log(name);
}

console.log(name);

// undefined as function arguments
// undefined as function return default value
let square = function (num) {
    console.log(num);
};

let result = square();
console.log(result);

let age = 27;

// null as assigned value
age = null;

console.log(age);