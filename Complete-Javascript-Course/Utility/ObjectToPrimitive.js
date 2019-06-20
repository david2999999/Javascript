({x:1, y:2}).toString() // => "[object Object]"

[1,2,3].toString() // => "1,2,3"
(function(x) { f(x); }).toString() // => "function(x) {\n f(x);\n}"
/\d+/g.toString() // => "/\\d+/g"
new Date(2010,0,1).toString() // => "Fri Jan 01 2010 00:00:00 GMT-0800 (PST)"

var d = new Date(2010, 0, 1); // January 1st, 2010, (Pacific time)
d.valueOf() // => 1262332800000


var now = new Date(); // Create a Date object
typeof (now + 1) // => "string": + converts dates to strings
typeof (now - 1) // => "number": - uses object-to-number conversion
now == now.toString() // => true: implicit and explicit string conversions
now > (now -1) // => true: > converts a Date to a number
