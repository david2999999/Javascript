// Recall that arguments.callee is a pointer to the function being executed and, as such, can be used
// to call the function recursively, as shown here:
function factorial(num){
    if (num <= 1){
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}