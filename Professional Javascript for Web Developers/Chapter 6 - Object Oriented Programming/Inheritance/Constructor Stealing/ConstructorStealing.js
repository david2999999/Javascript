// In an attempt to solve the inheritance problem with reference values on prototypes, developers
// began using a technique called constructor stealing (also sometimes called object masquerading
// or classical inheritance). The basic idea is quite simple: call the supertype constructor from within
// the subtype constructor.

function SuperType(){
    this.colors = [“red”, “blue”, “green”];
}
function SubType(){
    //inherit from SuperType
    SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push(“black”);

alert(instance1.colors); //”red,blue,green,black”
var instance2 = new SubType();
alert(instance2.colors); //”red,blue,green”