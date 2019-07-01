// Note that the variable in the for/in loop may be an arbitrary expression, as long as it
// evaluates to something suitable for the left side of an assignment. This expression is
// evaluated each time through the loop, which means that it may evaluate differently
// each time. For example, you can use code like the following to copy the names of all
// object properties into an array:
var o = {x:1, y:2, z:3};
var a = [], i = 0;
for(a[i++] in o) /* empty */;

// JavaScript arrays are simply a specialized kind of object and array indexes are object
// properties that can be enumerated with a for/in loop. For example, following the code
// above with this line enumerates the array indexes 0, 1, and 2:
for(i in a) console.log(i);