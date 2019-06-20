// The hasOwnProperty() method determines if a property exists on the instance or on the prototype.
// This method, which is inherited from Object, returns true only if a property of the given name
// exists on the object instance, as in this example:
function Person(){}

Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
    alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

alert(person1.hasOwnProperty(“name”)); //false

person1.name = “Greg”;
alert(person1.name); //”Greg” - from instance
alert(person1.hasOwnProperty(“name”)); //true

alert(person2.name); //”Nicholas” - from prototype
alert(person2.hasOwnProperty(“name”)); //false

delete person1.name;
alert(person1.name); //”Nicholas” - from the prototype
alert(person1.hasOwnProperty(“name”)); //false