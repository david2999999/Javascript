function Person(){}

Person.prototype = {
    name : “Nicholas”,
    age : 29,
    job : “Software Engineer”,
    sayName : function () {
        alert(this.name);
    }
};

// In this rewritten example, the Person.prototype property is set equal to a new object created
// with an object literal. The end result is the same, with one exception: the constructor property
// no longer points to Person. When a function is created, its prototype object is created and the
// constructor is automatically assigned. Essentially, this syntax overwrites the default prototype
// object completely, meaning that the constructor property is equal to that of a completely
// new object (the Object constructor) instead of the function itself. Although the instanceof
// operator still works reliably, you cannot rely on the constructor to indicate the type of object, as
// this example shows:
var friend = new Person();
alert(friend instanceof Object); //true
alert(friend instanceof Person); //true
alert(friend.constructor == Person); //false
alert(friend.constructor == Object); //true

function Person(){}
Person.prototype = {
    constructor: Person,
    name : “Nicholas”,
    age : 29,
    job : “Software Engineer”,
    sayName : function () {
        alert(this.name);
    }
};
