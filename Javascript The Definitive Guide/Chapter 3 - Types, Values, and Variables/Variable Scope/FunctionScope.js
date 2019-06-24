// In some C-like programming languages, each block of code within curly braces has its
// own scope, and variables are not visible outside of the block in which they are declared.
// This is called block scope, and JavaScript does not have it. Instead, JavaScript uses
// function scope: variables are visible within the function in which they are defined and
// within any functions that are nested within that function.
// In the following code, the variables i, j, and k are declared in different spots, but all
// have the same scope—all three are defined throughout the body of the function:
function test(o) {
    var i = 0; // i is defined throughout function
    if (typeof o == "object") {
        var j = 0; // j is defined everywhere, not just block
        for(var k=0; k < 10; k++) { // k is defined everywhere, not just loop
            console.log(k); // print numbers 0 through 9
        }
        console.log(k); // k is still defined: prints 10
    }
    console.log(j); // j is defined, but may not be initialized
}