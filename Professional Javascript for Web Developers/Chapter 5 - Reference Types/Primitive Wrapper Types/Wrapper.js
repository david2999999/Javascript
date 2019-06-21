// The Object constructor also acts as a factory method and is capable of returning an instance of a
// primitive wrapper based on the type of value passed into the constructor. For example:
var obj = new Object(“some text”);
alert(obj instanceof String); //true

// When a string is passed into the Object constructor, an instance of String is created; a number
// argument results in an instance of Number, while a Boolean argument returns an instance of Boolean.
// Keep in mind that calling a primitive wrapper constructor using new is not the same as calling the
// casting function of the same name. For example:
var value = “25”;
var number = Number(value); //casting function
alert(typeof number); //”number”

var obj = new Number(value); //constructor
alert(typeof obj); //”object”
// In this example, the variable number is filled with a primitive number value of 25 while the variable
// obj is fi lled with an instance of Number.