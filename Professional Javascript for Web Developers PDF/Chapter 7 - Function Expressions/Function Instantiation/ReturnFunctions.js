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
// createComparisonFunction() returns an anonymous function. The returned function
// will, presumably, be either assigned to a variable or otherwise called, but within
// createComparisonFunction() it is anonymous. Any time a function is being used as a value, it is
// a function expression. However, these are not the only uses for function expressions, as the rest of
// this chapter will show.