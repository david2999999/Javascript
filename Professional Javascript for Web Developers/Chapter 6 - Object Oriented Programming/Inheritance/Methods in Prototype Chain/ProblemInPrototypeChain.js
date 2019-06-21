// Even though prototype chaining is a powerful tool for inheritance, it is not without its issues.
// The major issue revolves around prototypes that contain reference values. Recall from earlier that
// prototype properties containing reference values are shared with all instances; this is why properties
// are typically defi ned within the constructor instead of on the prototype. When implementing
// inheritance using prototypes, the prototype actually becomes an instance of another type, meaning
// that what once were instance properties are now prototype properties

function SuperType(){
    this.colors = [“red”, “blue”, “green”];
}
function SubType(){
}
//inherit from SuperType
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push(“black”);
alert(instance1.colors); //”red,blue,green,black”

var instance2 = new SubType();
alert(instance2.colors); //”red,blue,green,black”