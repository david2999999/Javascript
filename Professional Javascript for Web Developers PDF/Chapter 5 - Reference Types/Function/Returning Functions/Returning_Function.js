// Returning a function from a function is also possible and can be quite useful. For instance, suppose
// that you have an array of objects and want to sort the array on an arbitrary object property. A
// comparison function for the array’s sort() method accepts only two arguments, which are the
// values to compare, but really you need a way to indicate which property to sort by. This problem
// can be addressed by defining a function to create a comparison function based on a property name,
// as in the following example:

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