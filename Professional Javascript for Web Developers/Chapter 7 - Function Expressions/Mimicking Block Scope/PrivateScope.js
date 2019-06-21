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





// This technique is often used in the global scope outside of functions to limit the number of variables
// and functions added to the global scope. Typically you want to avoid adding variables and functions
// to the global scope, especially in large applications with multiple developers, to avoid naming
// collisions. Private scopes allow every developer to use his or her own variables without worrying
// about polluting the global scope. Consider this example:
(function(){
    var now = new Date();
    if (now.getMonth() == 0 && now.getDate() == 1){
        alert('Happy new year!');
    }
})();
// Placing this code in the global scope provides functionality for determining if the day is January 1
// and, if so, displaying a message to the user. The variable now becomes a variable that is local to the
// anonymous function instead of being created in the global scope.