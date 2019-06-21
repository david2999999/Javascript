// Here, the variable color is defi ned inside an if statement. In languages such as C, C++, and
// Java, that variable would be destroyed after the if statement is executed. In JavaScript, however,
// the variable declaration adds a variable into the current execution context (the global context, in
// this case). This is important to keep in mind when dealing with the for statement
if (true) {
    var color = “blue”;
}
alert(color); //”blue”

for (var i=0; i < 10; i++){
    doSomething(i);
}
alert(i); //10