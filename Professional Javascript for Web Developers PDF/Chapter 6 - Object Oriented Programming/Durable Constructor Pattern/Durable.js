// Douglas Crockford coined the term durable objects in JavaScript to refer to objects that have no
// public properties and whose methods don’t reference the this object. Durable objects are best used
// in secure environments (those that forbid the use of this and new) or to protect data from the rest
// of the application (as in mashups). A durable constructor is a constructor that follows a pattern
// similar to the parasitic constructor pattern, with two differences: instance methods on the created
// object don’t refer to this, and the constructor is never called using the new operator..

function Person(name, age, job){
    //create the object to return
    var o = new Object();
    //optional: define private variables/functions here
    //attach methods
    o.sayName = function(){
        alert(name);
    };
    //return the object
    return o;
}

var friend = Person(“Nicholas”, 29, “Software Engineer”);
friend.sayName(); //”Nicholas”