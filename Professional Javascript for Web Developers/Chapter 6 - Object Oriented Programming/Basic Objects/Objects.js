// As mentioned in the previous chapter, the simplest way to create a custom object is to create a
// new instance of Object and add properties and methods to it, as in this example:
var person = new Object();
person.name = “Nicholas”;
person.age = 29;
person.job = “Software Engineer”;

person.sayName = function(){
    alert(this.name);
};


// This example creates an object called person that has three properties (name, age, and job) and
// one method (sayName()). The sayName() method displays the value of this.name, which resolves
// to person.name. Early JavaScript developers used this pattern frequently to create new objects. A
// few years later, object literals became the preferred pattern for creating such objects. The previous
// example can be rewritten using object literal notation as follows:
var person = {
    name: “Nicholas”,
    age: 29,
    job: “Software Engineer”,
    sayName: function(){
        alert(this.name);
    }
};