// To execute a while statement, the interpreter first evaluates expression. If the value of
// the expression is falsy, then the interpreter skips over the statement that serves as the
// loop body and moves on to the next statement in the program. If, on the other hand,
// the expression is truthy, the interpreter executes the statement and repeats, jumping
// back to the top of the loop and evaluating expression again. Another way to say this is
// that the interpreter executes statement repeatedly while the expression is truthy. Note
// that you can create an infinite loop with the syntax while(true)

var count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

 //As you can see, the variable count starts off at 0 and is incremented each time the body
// of the loop runs. Once the loop has executed 10 times, the expression becomes false
// (i.e., the variable count is no longer less than 10), the while statement finishes, and the
// interpreter can move on to the next statement in the program. Many loops have a
// counter variable like count. The variable names i, j, and k are commonly used as loop
// counters, though you should use more descriptive names if it makes your code easier
// to understand.