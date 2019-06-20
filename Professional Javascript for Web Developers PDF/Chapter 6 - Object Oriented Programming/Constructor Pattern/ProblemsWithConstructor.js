// Though the constructor paradigm is useful, it is not without its faults. The major downside to
// constructors is that methods are created once for each instance. So, in the previous example, both
// person1 and person2 have a method called sayName(), but those methods are not the same
// instance of Function. Remember, functions are objects in ECMAScript, so every time a function is
// defi ned, it’s actually an object being instantiated. Logically, the constructor actually looks like this:
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = new Function(“alert(this.name)”); //logical equivalent
}

// It’s possible to work around this limitation by moving the function defi nition outside of the constructor,
// as follows:
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName(){
    alert(this.name);
}

var person1 = new Person(“Nicholas”, 29, “Software Engineer”);
var person2 = new Person(“Greg”, 27, “Doctor”);