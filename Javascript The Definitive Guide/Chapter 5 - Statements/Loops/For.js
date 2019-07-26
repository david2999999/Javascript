for(var count = 0; count < 10; count++)
    console.log(count);

// Loops can become a lot more complex than this simple example, of course, and sometimes
// multiple variables change with each iteration of the loop. This situation is the
// only place that the comma operator is commonly used in JavaScript; it provides a way
// to combine multiple initialization and increment expressions into a single expression
// suitable for use in a for loop:
var i,j;
for(i = 0, j = 10 ; i < 10 ; i++, j--)
    sum += i * j;

// In all our loop examples so far, the loop variable has been numeric. This is quite common
// but is not necessary. The following code uses a for loop to traverse a linked list
// data structure and return the last object in the list (i.e., the first object that does not
// have a next property):
function tail(o) { // Return the tail of linked list o
    for(; o.next; o = o.next) /* empty */ ; // Traverse while o.next is truthy
    return o;
}