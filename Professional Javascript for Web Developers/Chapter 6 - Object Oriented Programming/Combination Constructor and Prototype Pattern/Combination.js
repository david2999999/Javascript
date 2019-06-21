// The most common way of defining custom types is to combine the constructor and prototype
// patterns. The constructor pattern defi nes instance properties, whereas the prototype pattern defi nes
// methods and shared properties. With this approach, each instance ends up with its own copy of
// the instance properties, but they all share references to methods, conserving memory. This pattern
// allows arguments to be passed into the constructor as well, effectively combining the best parts of
// each pattern

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = [“Shelby”, “Court”];
}

Person.prototype = {
    constructor: Person,
    sayName : function () {
        alert(this.name);
    }
};

var person1 = new Person(“Nicholas”, 29, “Software Engineer”);
var person2 = new Person(“Greg”, 27, “Doctor”);
person1.friends.push(“Van”);
alert(person1.friends); //”Shelby,Court,Van”
alert(person2.friends); //”Shelby,Court”
alert(person1.friends === person2.friends); //false
alert(person1.sayName === person2.sayName); //true