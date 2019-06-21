//this is okay
var sayHi;
if(condition){
    sayHi = function(){
        alert('Hi!');
    };
} else {
    sayHi = function(){
        alert('Yo!');
    };
}

// This example behaves the way you would expect, assigning the correct function expression to the
// variable sayHi based on condition.