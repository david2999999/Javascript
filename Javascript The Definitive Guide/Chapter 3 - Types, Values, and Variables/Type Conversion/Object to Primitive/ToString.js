// All objects inherit two conversion methods. The first is called toString(), and its job
// is to return a string representation of the object. The default toString() method does
// not return a very interesting value (though we’ll find it useful in Example 6-4):
({x:1, y:2}).toString() // => "[object Object]"

// Many classes define more specific versions of the toString() method. The toString()
// method of the Array class, for example, converts each array element to a string and
// joins the resulting strings together with commas in between. The toString() method
// of the Function class returns an implementation-defined representation of a function.
// In practice, implementations usually convert user-defined functions to strings of Java-
// Script source code. The Date class defines a toString() method that returns a humanreadable
// (and JavaScript-parsable) date and time string. The RegExp class defines a
// toString() method that converts RegExp objects to a string that looks like a RegExp
// literal:
[1,2,3].toString() // => "1,2,3"
(function(x) { f(x); }).toString() // => "function(x) {\n f(x);\n}"
/\d+/g.toString() // => "/\\d+/g"
new Date(2010,0,1).toString() // => "Fri Jan 01 2010 00:00:00 GMT-0800 (PST)"