function add(num1, num2){
    var sum = num1 + num2;
    return sum;
}
// In this function, there are three private variables: num1, num2, and sum. These variables are
// accessible inside the function but can’t be accessed outside it. If a closure were to be created inside
// this function, it would have access to these variables through its scope chain. Using this knowledge,
//     you can create public methods that have access to private variables.

// A privileged method is a public method that has access to private variables and/or private
// functions. There are two ways to create privileged methods on objects. The fi rst is to do so inside a
// constructor, as in this example:
function MyObject(){
    //private variables and functions
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }
    //privileged methods
    this.publicMethod = function (){
        privateVariable++;
        return privateFunction();
    };
}