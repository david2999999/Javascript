function createComparisonFunction(propertyName) {
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}

//When the anonymous function is returned from createComparisonFunction(), its scope
// chain has been initialized to contain the activation object from createComparisonFunction()
// and the global variable object. This gives the anonymous function access to all of the variables from
// createComparisonFunction(). Another interesting side effect is that the activation object
// from createComparisonFunction() cannot be destroyed once the function finishes executing, because
// a reference still exists in the anonymous function’s scope chain. After createComparisonFunction()
// completes, the scope chain for its execution context is destroyed, but its activation object will remain in
// memory until the anonymous function is destroyed

//create function
var compareNames = createComparisonFunction('name');
//call function
var result = compareNames({ name: 'Nicholas' }, { name: 'Greg'});
//dereference function - memory can now be reclaimed
compareNames = null;