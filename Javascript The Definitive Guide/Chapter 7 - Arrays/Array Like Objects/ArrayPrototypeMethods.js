// The JavaScript array methods are purposely defined to be generic, so that they work
// correctly when applied to array-like objects in addition to true arrays. In
// ECMAScript 5, all array methods are generic. In ECMAScript 3, all methods except
// toString() and toLocaleString() are generic. (The concat() method is an exception:
// although it can be invoked on an array-like object, it does not property expand that
// object into the returned array.) Since array-like objects do not inherit from
// Array.prototype, you cannot invoke array methods on them directly. You can invoke
// them indirectly using the Function.call method, however:
var a = {"0":"a", "1":"b", "2":"c", length:3}; // An array-like object
Array.prototype.join.call(a, "+") // => "a+b+c"
Array.prototype.slice.call(a, 0) // => ["a","b","c"]: true array copy
Array.prototype.map.call(a, function(x) {
    return x.toUpperCase();
})

// We’ve seen this call() technique before in the isArray() method of §7.10. The
// call() method of Function objects is covered in more detail in §8.7.3.
// The ECMAScript 5 array methods were introduced in Firefox 1.5. Because they were
// written generically, Firefox also introduced versions of these methods as functions defined
// directly on the Array constructor. With these versions of the methods defined,
// the examples above can be rewritten like this:
var a = {"0":"a", "1":"b", "2":"c", length:3}; // An array-like object
Array.join(a, "+")
Array.slice(a, 0)
Array.map(a, function(x) { return x.toUpperCase(); })

Array.join = Array.join || function(a,sep) {
    return Array.prototype.join.call(a,sep);
};
Array.slice = Array.slice || function(a,from,to) {
    return Array.prototype.slice.call(a,from,to);
};
Array.map = Array.map || function(a, f, thisArg) {
    return Array.prototype.map.call(a, f, thisArg);
}