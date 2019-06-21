// Primitive and reference values are defi ned similarly: a variable is created and assigned a value. What you
// can do with those values once they’re stored in a variable, however, is quite different. When you work
// with reference values, you can add, change, or delete properties and methods at any time.

var person = new Object();
person.name = “Nicholas”;
alert(person.name); //”Nicholas”

var name = “Nicholas”;
name.age = 27;
alert(name.age); //undefined