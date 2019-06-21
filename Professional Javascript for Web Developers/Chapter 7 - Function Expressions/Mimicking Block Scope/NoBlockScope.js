// As mentioned previously, JavaScript has no concept of block-level scoping, meaning variables
// defi ned inside of block statements are actually created in the containing function, not within the
// statement. Consider the following:
function outputNumbers(count){
    for (var i=0; i < count; i++){
        alert(i);
    }
    alert(i); //count
}

//In this function, a for loop is defined and the variable i is initialized to be equal to 0. For languages
// such as Java and C++, the variable i would be defined only in the block statement representing the
// for loop, so the variable would be destroyed as soon as the loop completed. However, in JavaScript
// the variable i is defined as part of the outputNumbers() activation object, meaning it is accessible
// inside the function from that point on. Even the following errant redeclaration of the variable won’t
// wipe out its value:
function outputNumbers(count){
    for (var i=0; i < count; i++){
        alert(i);
    }
    var i; //variable redeclared
    alert(i); //count
}