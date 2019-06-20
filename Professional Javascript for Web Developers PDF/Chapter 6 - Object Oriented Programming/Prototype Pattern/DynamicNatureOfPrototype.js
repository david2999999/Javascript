// Since the process of looking up values on a prototype is a search, changes made to the prototype at
// any point are immediately refl ected on instances, even the instances that existed before the change
// was made. Here’s an example:
var friend= new Person();
Person.prototype.sayHi = function(){
    alert(“hi”);
};
friend.sayHi(); //”hi” - works!


// The [[Prototype]] pointer is assigned when the constructor is called, so changing the prototype to
// a different object severs the tie between the constructor and the original prototype. Remember: the
// instance has a pointer to only the prototype, not to the constructor. Consider the following:
function Person(){
}
var friend = new Person();
Person.prototype = {
    constructor: Person,
    name : “Nicholas”,
    age : 29,
    job : “Software Engineer”,
    sayName : function () {
        alert(this.name);
    }
};
friend.sayName(); //error