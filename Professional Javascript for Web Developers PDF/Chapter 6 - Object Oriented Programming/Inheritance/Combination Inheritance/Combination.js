// Combination inheritance (sometimes also called pseudoclassical inheritance) combines prototype
// chaining and constructor stealing to get the best of each approach. The basic idea is to use
// prototype chaining to inherit properties and methods on the prototype and to use constructor
// stealing to inherit instance properties. This allows function reuse by defi ning methods on the
// prototype and allows each instance to have its own properties. Consider the following:
function SuperType(name){
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
    //inherit properties
    SuperType.call(this, name);
    this.age = age;
}
//inherit methods
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
    alert(this.age);
};

var instance1 = new SubType('Nicholas', 29);
instance1.colors.push('black');
alert(instance1.colors); //'red,blue,green,black'
instance1.sayName(); //'Nicholas';
instance1.sayAge(); //29

var instance2 = new SubType('Greg', 27);
alert(instance2.colors); //'red,blue,green'
instance2.sayName(); //'Greg';
instance2.sayAge(); //27