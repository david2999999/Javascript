// The for/in loop was covered in §5.5.4. It runs the body of the loop once for each
// enumerable property (own or inherited) of the specified object, assigning the name of
// the property to the loop variable. Built-in methods that objects inherit are not
// enumerable, but the properties that your code adds to objects are enumerable (unless
// you use one of the functions described later to make them nonenumerable).

var o = {x:1, y:2, z:3}; // Three enumerable own properties
o.propertyIsEnumerable("toString") // => false: not enumerable
for(p in o) // Loop through the properties
    console.log(p); // Prints x, y, and z, but not toString

//Some utility libraries add new methods (or other properties) to Object.prototype so
// that they are inherited by, and available to, all objects. Prior to ECMAScript 5, however,
// there is no way to make these added methods nonenumerable, so they are enumerated
// by for/in loops. To guard against this, you might want to filter the properties returned
// by for/in. Here are two ways you might do so:
for(p in o) {
    if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
}

for(p in o) {
    if (typeof o[p] === "function") continue; // Skip methods
}