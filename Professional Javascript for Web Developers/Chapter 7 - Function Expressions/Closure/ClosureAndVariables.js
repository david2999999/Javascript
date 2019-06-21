function createFunctions(){
    var result = new Array();
    for (var i=0; i < 10; i++){
        result[i] = function(){
            return i;
        };
    }
    return result;
}

//This function returns an array of functions. It seems that each function should just return the value
// of its index, so the function in position 0 returns 0, the function in position 1 returns 1, and so on.
// In reality, every function returns 10. Since each function has the createFunctions() activation
// object in its scope chain, they are all referring to the same variable, i. When createFunctions()
// finishes running, the value of i is 10, and since every function references the same variable object in
// which i exists, the value of i inside each function is 10