// All function arguments in ECMAScript are passed by value. This means that the value outside of
// the function is copied into an argument on the inside of the function the same way a value is copied
// from one variable to another. If the value is primitive, then it acts just like a primitive variable
// copy, and if the value is a reference, it acts just like a reference variable copy. This is often a point
// of confusion for developers, because variables are accessed both by value and by reference, but
// arguments are passed only by value.
// When an argument is passed by value, the value is copied into a local variable (a named argument
// and, in ECMAScript, a slot in the arguments object). When an argument is passed by reference, the
// location of the value in memory is stored into a local variable, which means that changes to the local
// variable are reflected outside of the function. (This is not possible in ECMAScript.)

function addTen(num) {
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
alert(count); //20 - no change
alert(result); //30


function setName(obj) {
    obj.name = “Nicholas”;
}
var person = new Object();
setName(person);
alert(person.name); //”Nicholas”