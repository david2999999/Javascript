// Just as the comma operator (§4.13.5) combines multiple expressions into a single
// expression, a statement block combines multiple statements into a single compound
// statement. A statement block is simply a sequence of statements enclosed within curly
// braces. Thus, the following lines act as a single statement and can be used anywhere
// that JavaScript expects a single statement:
{
    x = Math.PI;
    cx = Math.cos(x);
    console.log("cos(π) = " + cx);
}

// There are a few things to note about this statement block. First, it does not end with a
// semicolon. The primitive statements within the block end in semicolons, but the block
// itself does not. Second, the lines inside the block are indented relative to the curly braces
// that enclose them. This is optional, but it makes the code easier to read and understand.
// Finally, recall that JavaScript does not have block scope and variables declared within
// a statement block are not private to the block