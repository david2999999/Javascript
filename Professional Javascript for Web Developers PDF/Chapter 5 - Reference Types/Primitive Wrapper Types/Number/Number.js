// The Number type is the reference type for numeric values. To create a Number object, use the Number
// constructor and pass in any number. Here’s an example:
var numberObject = new Number(10);



// As with the Boolean type, the Number type overrides valueOf(), toLocaleString(), and
// toString(). The valueOf() method returns the primitive numeric value represented by the object,
// whereas the other two methods return the number as a string. As mentioned in Chapter 3, the
// toString() method optionally accepts a single argument indicating the radix in which to represent
// the number, as shown in the following examples:
var num = 10;
alert(num.toString()); //”10”
alert(num.toString(2)); //”1010”
alert(num.toString(8)); //”12”
alert(num.toString(10)); //”10”
alert(num.toString(16)); //”a”


// The toFixed() method returns a string representation of a number with a specifi ed number of
// decimal points, as in this example:
var num = 10;
alert(num.toFixed(2)); //”10.00”

var numberObject = new Number(10);
var numberValue = 10;
alert(typeof numberObject); //”object”
alert(typeof numberValue); //”number”
alert(numberObject instanceof Number); //true
alert(numberValue instanceof Number); //false