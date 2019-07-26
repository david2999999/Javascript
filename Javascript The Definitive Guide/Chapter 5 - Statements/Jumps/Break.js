// You’ve already seen examples of the break statement within a switch statement. In
// loops, it is typically used to exit prematurely when, for whatever reason, there is no
// longer any need to complete the loop. When a loop has complex termination conditions,
// it is often easier to implement some of these conditions with break statements
// rather than trying to express them all in a single loop expression. The following code
// searches the elements of an array for a particular value. The loop terminates in the
// normal way when it reaches the end of the array; it terminates with a break statement
// if it finds what it is looking for in the array:
for(var i = 0; i < a.length; i++) {
    if (a[i] == target) break;
}

// JavaScript also allows the break keyword to be followed by a statement label (just the
// identifier, with no colon):
    // break labelname;

// When break is used with a label, it jumps to the end of, or terminates, the enclosing
// statement that has the specified label. It is a syntax error to use break in this form if
// there is no enclosing statement with the specified label. With this form of the break
// statement, the named statement need not be a loop or switch: break can “break out of”
// any enclosing statement. This statement can even be a statement block grouped within
// curly braces for the sole purpose of naming the block with a label.
var matrix = getData(); // Get a 2D array of numbers from somewhere
// Now sum all the numbers in the matrix.
var sum = 0, success = false;
// Start with a labeled statement that we can break out of if errors occur
compute_sum: if (matrix) {
    for(var x = 0; x < matrix.length; x++) {
        var row = matrix[x];
        if (!row) break compute_sum;
        for(var y = 0; y < row.length; y++) {
            var cell = row[y];
            if (isNaN(cell)) break compute_sum;
            sum += cell;
        }
    }
    success = true;
}

// The break statements jump here. If we arrive here with success == false
// then there was something wrong with the matrix we were given.
// Otherwise sum contains the sum of all cells of the matrix.