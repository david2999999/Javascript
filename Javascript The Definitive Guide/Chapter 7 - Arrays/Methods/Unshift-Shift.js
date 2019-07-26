//The unshift() and shift() methods behave much like push() and pop(), except that
// they insert and remove elements from the beginning of an array rather than from the
// end. unshift() adds an element or elements to the beginning of the array, shifts the
// existing array elements up to higher indexes to make room, and returns the new length
// of the array. shift() removes and returns the first element of the array, shifting all
// subsequent elements down one place to occupy the newly vacant space at the start of
// the array.
var a = []; // a:[]
a.unshift(1); // a:[1] Returns: 1
a.unshift(22); // a:[22,1] Returns: 2
a.shift(); // a:[1] Returns: 22
a.unshift(3,[4,5]); // a:[3,[4,5],1] Returns: 3
a.shift(); // a:[[4,5],1] Returns: 3
a.shift(); // a:[1] Returns: [4,5]
a.shift(); // a:[] Returns: 1