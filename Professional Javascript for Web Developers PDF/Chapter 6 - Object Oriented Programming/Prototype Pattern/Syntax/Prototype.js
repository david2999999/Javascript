// Each function is created with a prototype property, which is an object containing properties and
// methods that should be available to instances of a particular reference type. This object is literally
// a prototype for the object to be created once the constructor is called. The benefi t of using the
// prototype is that all of its properties and methods are shared among object instances. Instead of
// assigning object information in the constructor, they can be assigned directly to the prototype, as in
// this example:
function Person(){}

Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
    alert(this.name);
};

var person1 = new Person();
person1.sayName(); //”Nicholas”
var person2 = new Person();
person2.sayName(); //”Nicholas”
alert(person1.sayName == person2.sayName); //true


// Although it’s possible to read values on the prototype from object instances, it is not possible to
// overwrite them. If you add a property to an instance that has the same name as a property on the
// prototype, you create the property on the instance, which then masks the property on the prototype.
// Here’s an example:
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