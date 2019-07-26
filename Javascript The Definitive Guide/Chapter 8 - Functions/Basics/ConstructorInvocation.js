// If a function or method invocation is preceded by the keyword new, then it is a
// constructor invocation. (Constructor invocations were introduced in §4.6 and
// §6.1.2, and constructors will be covered in more detail in Chapter 9.) Constructor
// invocations differ from regular function and method invocations in their handling of
// arguments, invocation context, and return value.

// If a constructor invocation includes an argument list in parentheses, those argument
// expressions are evaluated and passed to the function in the same way they would be
// for function and method invocations. But if a constructor has no parameters, then
// JavaScript constructor invocation syntax allows the argument list and parentheses to
// be omitted entirely. You can always omit a pair of empty parentheses in a constructor
// invocation and the following two lines, for example, are equivalent:
var o = new Object();
var o = new Object;

// Constructor functions do not normally use the return keyword. They typically initialize
// the new object and then return implicitly when they reach the end of their body. In this
// case, the new object is the value of the constructor invocation expression. If, however,
// a constructor explicitly used the return statement to return an object, then that object
// becomes the value of the invocation expression. If the constructor uses return with no
// value, or if it returns a primitive value, that return value is ignored and the new object
// is used as the value of the invocation.