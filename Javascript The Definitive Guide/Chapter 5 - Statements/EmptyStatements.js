// A compound statement allows you to use multiple statements where JavaScript syntax
// expects a single statement. The empty statement is the opposite: it allows you to include
// no statements where one is expected. The empty statement looks like this:
;

// The JavaScript interpreter takes no action when it executes an empty statement. The
// empty statement is occasionally useful when you want to create a loop that has an
// empty body. Consider the following for loop (for loops will be covered in §5.5.3):
// Initialize an array a
for(i = 0; i < a.length; a[i++] = 0) ;

// Note that the accidental inclusion of a semicolon after the right parenthesis of a for
//     loop, while loop, or if statement can cause frustrating bugs that are difficult to detect.
//     For example, the following code probably does not do what the author intended:
if ((a == 0) || (b == 0)); // Oops! This line does nothing...
    o = null; // and this line is always executed.

// When you intentionally use the empty statement, it is a good idea to comment your
// code in a way that makes it clear that you are doing it on purpose. For example:
for(i = 0; i < a.length; a[i++] = 0) /* empty */ ;