// An object’s class attribute is a string that provides information about the type of the
// object. Neither ECMAScript 3 nor ECMAScript 5 provide any way to set this attribute,
// and there is only an indirect technique for querying it. The default toString() method
// (inherited from Object.prototype) returns a string of the form:
    // [object class]

// So to obtain the class of an object, you can invoke this toString() method on it, and
// extract the eighth through the second-to-last characters of the returned string. The
// tricky part is that many objects inherit other, more useful toString() methods, and to
// invoke the correct version of toString(), we must do so indirectly, using the
// Function.call() method (see §8.7.3). Example 6-4 defines a function that returns the
// class of any object you pass it.
function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

classof(null) // => "Null"
classof(1) // => "Number"
classof("") // => "String"
classof(false) // => "Boolean"
classof({}) // => "Object"
classof([]) // => "Array"
classof(/./) // => "Regexp"
classof(new Date()) // => "Date"
classof(window) // => "Window" (a client-side host object)
function f() {}; // Define a custom constructor
classof(new f()); // => "Object"