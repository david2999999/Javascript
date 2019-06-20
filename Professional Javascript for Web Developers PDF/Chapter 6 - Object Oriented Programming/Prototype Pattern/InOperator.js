// There are two ways to use the in operator: on its own or as a for-in loop. When used on its own, the
// in operator returns true when a property of the given name is accessible by the object, which is to say
// that the property may exist on the instance or on the prototype. Consider the following example:
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
alert(“name” in person1); //true

person1.name = “Greg”;
alert(person1.name); //”Greg” - from instance
alert(person1.hasOwnProperty(“name”)); //true

alert(“name” in person1); //true
alert(person2.name); //”Nicholas” - from prototype
alert(person2.hasOwnProperty(“name”)); //false
alert(“name” in person2); //true

delete person1.name;
alert(person1.name); //”Nicholas” - from the prototype
alert(person1.hasOwnProperty(“name”)); //false
alert(“name” in person1); //true