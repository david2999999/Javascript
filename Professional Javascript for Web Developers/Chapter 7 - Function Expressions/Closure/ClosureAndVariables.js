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

function createFunctions(){
    var result = new Array();
    for (var i=0; i < 10; i++){
        result[i] = function(num){
            return function(){
                return num;
            };
        }(i);
    }
    return result;
}

//With this version of createFunctions(), each function returns a different number. Instead of
// assigning a closure directly into the array, an anonymous function is defi ned and called immediately.
// The anonymous function has one argument, num, which is the number that the result function
// should return. The variable i is passed in as an argument to the anonymous function. Since function
// arguments are passed by value, the current value of i is copied into the argument num. Inside the
// anonymous function, a closure that accesses num is created and returned. Now each function in the
// result array has its own copy of num and thus can return separate numbers.