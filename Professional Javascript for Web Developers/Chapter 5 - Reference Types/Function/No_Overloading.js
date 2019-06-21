// Thinking of function names as pointers also explains why there can be no function overloading in
// ECMAScript. Recall the following example from Chapter 3:
function addSomeNumber(num){
    return num + 100;
}

function addSomeNumber(num) {
    return num + 200;
}

var result = addSomeNumber(100); //300

// In this example, it’s clear that declaring two functions with the same name always results in the last
// function overwriting the previous one. This code is almost exactly equivalent to the following:
var addSomeNumber = function (num){
    return num + 100;
};

addSomeNumber = function (num) {
    return num + 200;
};

var result = addSomeNumber(100); //300