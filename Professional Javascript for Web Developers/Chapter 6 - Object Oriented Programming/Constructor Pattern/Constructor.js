function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    };
}

var person1 = new Person(“Nicholas”, 29, “Software Engineer”);
var person2 = new Person(“Greg”, 27, “Doctor”);

// In this example, the Person() function takes the place of the factory createPerson() function.
// Note that the code inside Person() is the same as the code inside createPerson(), with the
// following exceptions:
// There is no object being created explicitly.
// The properties and method are assigned directly onto the this object.
// There is no return statement.

// At the end of the preceding example, person1 and person2 are each fi lled with a different instance
// of Person. Each of these objects has a constructor property that points back to Person, as follows:
alert(person1.constructor == Person); //true
alert(person2.constructor == Person); //true

// The constructor property was originally intended for use in identifying the object type. However, the
// instanceof operator is considered to be a safer way of determining type. Each of the objects in this
// example is considered to be both an instance of Object and an instance of Person, as indicated by
// using the instanceof operator like this:
alert(person1 instanceof Object); //true
alert(person1 instanceof Person); //true
alert(person2 instanceof Object); //true
alert(person2 instanceof Person); //true