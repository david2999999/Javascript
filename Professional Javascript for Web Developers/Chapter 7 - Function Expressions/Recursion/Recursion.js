// A recursive function typically is formed when a function calls itself by name, as in the following example:
function factorial(num){
    if (num <= 1){
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

// This is the classic recursive factorial function. Although this works initially, it’s possible to prevent
// it from functioning by running the following code immediately after it:
var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4)); //error!