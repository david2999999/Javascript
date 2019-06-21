// The basic syntax of an anonymous function used as a block scope (often called a private scope) is as
// follows:
(function(){
    //block code here
})();

function outputNumbers(count){
    (function () {
        for (var i=0; i < count; i++){
            alert(i);
        }
    })();
    alert(i); //causes an error
}

//In this rewritten version of the outputNumbers() function, a private scope is inserted around
// the for loop. Any variables defined within the anonymous function are destroyed as soon as it
// completes execution, so the variable i is used in the loop and then destroyed. The count variable is
// accessible inside the private scope because the anonymous function is a closure, with full access to
// the containing scope’s variables.