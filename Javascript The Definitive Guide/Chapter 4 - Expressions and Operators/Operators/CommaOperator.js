// The comma operator is a binary operator whose operands may be of any type. It evaluates
// its left operand, evaluates its right operand, and then returns the value of the right
// operand. Thus, the following line:
    i=0, j=1, k=2;

// evaluates to 2 and is basically equivalent to:
    i = 0; j = 1; k = 2;

// The left-hand expression is always evaluated, but its value is discarded, which means
// that it only makes sense to use the comma operator when the left-hand expression has
// side effects. The only situation in which the comma operator is commonly used is with
//     a for loop (§5.5.3) that has multiple loop variables:
// The first comma below is part of the syntax of the var statement
// The second comma is the comma operator: it lets us squeeze 2
// expressions (i++ and j--) into a statement (the for loop) that expects 1.
for(var i=0,j=10; i < j; i++,j--)
    console.log(i+j);