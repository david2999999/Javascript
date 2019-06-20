
// The delete operator, however, completely removes the instance property and
// allows the prototype property to be accessed again as follows:
function Person(){}
Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
    alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
person1.name = “Greg”;

alert(person1.name); //”Greg” - from instance
alert(person2.name); //”Nicholas” - from prototype
delete person1.name;
alert(person1.name); //”Nicholas” - from the prototype