// The debugger statement normally does nothing. If, however, a debugger program is
// available and is running, then an implementation may (but is not required to) perform
// some kind of debugging action. In practice, this statement acts like a breakpoint: execution
// of JavaScript code stops and you can use the debugger to print variables’ values,
// examine the call stack, and so on. Suppose, for example, that you are getting an exception
// in your function f() because it is being called with an undefined argument, and
// you can’t figure out where this call is coming from. To help you in debugging this
// problem, you might alter f() so that it begins like this:

function f(o) {
    if (o === undefined) debugger; // Temporary line for debugging purposes
    //... // The rest of the function goes here.
}