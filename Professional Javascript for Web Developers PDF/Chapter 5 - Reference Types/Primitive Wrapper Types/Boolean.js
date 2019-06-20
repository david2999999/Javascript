// The Boolean type is the reference type corresponding to the Boolean values. To create a Boolean
// object, use the Boolean constructor and pass in either true or false, as in the following example:
var booleanObject = new Boolean(true);

// Instances of Boolean override the valueOf() method to return a primitive value of either true or
// false. The toString() method is also overridden to return a string of “true” or “false” when
// called. Unfortunately, not only are Boolean objects of little use in ECMAScript, they can actually
// be rather confusing. The problem typically occurs when trying to use Boolean objects in Boolean
// expressions, as in this example:
var falseObject = new Boolean(false);
var result = falseObject && true;
alert(result); //true
var falseValue = false;
result = falseValue && true;
alert(result); //false


// There are a couple of other differences between the primitive and the reference Boolean types.
// The typeof operator returns “boolean” for the primitive but “object” for the reference. Also,
// a Boolean object is an instance of the Boolean type and will return true when used with the
// instanceof operator, whereas a primitive value returns false, as shown here:
alert(typeof falseObject); //object
alert(typeof falseValue); //boolean
alert(falseObject instanceof Boolean); //true
alert(falseValue instanceof Boolean); //false