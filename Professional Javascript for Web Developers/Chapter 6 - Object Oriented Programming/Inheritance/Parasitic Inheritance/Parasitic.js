// Closely related to prototypal inheritance is the concept of parasitic inheritance, another pattern
// popularized by Crockford. The idea behind parasitic inheritance is similar to that of the parasitic
// constructor and factory patterns: create a function that does the inheritance, augments the object
// in some way, and then returns the object as if it did all the work
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

function createAnother(original){
    var clone = object(original); //create a new object by calling a function
    clone.sayHi = function(){ //augment the object in some way
        alert(“hi”);
    };
    return clone; //return the object
}

var person = {
    name: “Nicholas”,
    friends: [“Shelby”, “Court”, “Van”]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //”hi”