// Here, the function createPerson() accepts arguments with which to build an object with all of the
// necessary information to represent a Person object. The function can be called any number of times
// with different arguments and will still return an object that has three properties and one method.
// Though this solved the problem of creating multiple similar objects, the factory pattern didn’t
// address the issue of object identifi cation (what type of object an object is). As JavaScript continued
// to evolve, a new pattern emerged.
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o;
}

var person1 = createPerson(“Nicholas”, 29, “Software Engineer”);
var person2 = createPerson(“Greg”, 27, “Doctor”);