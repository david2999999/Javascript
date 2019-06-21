// ECMAScript 5 also formalizes an additional property on a function object: caller. Though not
// defi ned in ECMAScript 3, all browsers except earlier versions of Opera supported this property,
// which contains a reference to the function that called this function or null if the function was
// called from the global scope. For example:
function outer(){
    inner();
}

function inner(){
    alert(inner.caller);
}

outer();


// This code displays an alert with the source text of the outer() function. Because outer() calls
// inner(), then inner.caller points back to outer(). For looser coupling, you can also access the
// same information via arguments.callee.caller:
function outer(){
    inner();
}

function inner(){
    alert(arguments.callee.caller);
}

outer();