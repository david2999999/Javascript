var a = "hello";
first();

function  first() {
    var b = "Hi";
    second();

    function second() {
        var c = "hey";
        third();
    }
}

// due to scope chain, third() does not have access to var b and c
// third() only has access to var a and d
function third() {
    var d = "Dave";
    // console.log(a + b + c + d);    // results in error message for this line
    console.log(a + " " +  d);
}