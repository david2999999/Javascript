// One of the key characteristics of function declarations is function declaration hoisting, whereby
// function declarations are read before the code executes. That means a function declaration may
// appear after code that calls it and still work:

sayHi();
function sayHi(){
    alert('Hi!');
}