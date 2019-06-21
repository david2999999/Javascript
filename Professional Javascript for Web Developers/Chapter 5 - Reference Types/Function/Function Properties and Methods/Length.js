// This code defi nes three functions, each with a different number of named arguments. The
// sayName() function specifies one argument, so its length property is set to 1. Similarly, the
// sum() function specifies two arguments, so its length property is 2, and sayHi() has no named
// arguments, so its length is 0.
function sayName(name){
    alert(name);
}

function sum(num1, num2){
    return num1 + num2;
}

function sayHi(){
    alert(“hi”);
}
alert(sayName.length); //1
alert(sum.length); //2
alert(sayHi.length); //0