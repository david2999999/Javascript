// The forEach() method iterates through an array, invoking a function you specify for
// each element. As described above, you pass the function as the first argument to
// forEach(). forEach() then invokes your function with three arguments: the value of the
// array element, the index of the array element, and the array itself. If you only care about
// the value of the array element, you can write a function with only one parameter—the
// additional arguments will be ignored:

var data = [1,2,3,4,5]; // An array to sum
// Compute the sum of the array elements
var sum = 0; // Start at 0
data.forEach(function(value) { sum += value; }); // Add each value to sum
sum  // => 15

// Now increment each array element
data.forEach(function(v, i, a) { a[i] = v + 1; });
data // => [2,3,4,5,6]

// Note that forEach() does not provide a way to terminate iteration before all elements
// have been passed to the function. That is, there is no equivalent of the break statement
// you can use with a regular for loop. If you need to terminate early, you must throw an
// exception, and place the call to forEach() within a try block. The following code defines
// a foreach() function that calls the forEach() method within such a try block. If the
// function passed to foreach() throws foreach.break, the loop will terminate early:
function foreach(a,f,t) {
    try { a.forEach(f,t); }
    catch(e) {
        if (e === foreach.break) return;
        else throw e;
    }
}
foreach.break = new Error("StopIteration");