// The push() and pop() methods allow you to work with arrays as if they were stacks.
// The push() method appends one or more new elements to the end of an array and
// returns the new length of the array. The pop() method does the reverse: it deletes the
// last element of an array, decrements the array length, and returns the value that it
// removed. Note that both methods modify the array in place rather than produce a
// modified copy of the array. The combination of push() and pop() allows you to use a
// JavaScript array to implement a first-in, last-out stack.
var stack = []; // stack: []
stack.push(1,2); // stack: [1,2] Returns 2
stack.pop(); // stack: [1] Returns 2
stack.push(3); // stack: [1,3] Returns 2
stack.pop(); // stack: [1] Returns 3
stack.push([4,5]); // stack: [1,[4,5]] Returns 2
stack.pop() // stack: [1] Returns [4,5]
stack.pop(); // stack: [] Returns 1