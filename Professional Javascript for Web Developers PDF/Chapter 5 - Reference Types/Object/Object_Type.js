var person = new Object();
person.name = “Nicholas”;
person.age = 29;

var person = {
    name : “Nicholas”,
    age : 29
};


// This example produces an object with a name property, an age property, and a property “5”. Note
// that numeric property names are automatically converted to strings.
var person = {
    “name” : “Nicholas”,
    “age” : 29,
    5: true
};

var person = {}; //same as new Object()
person.name = “Nicholas”;
person.age = 29;