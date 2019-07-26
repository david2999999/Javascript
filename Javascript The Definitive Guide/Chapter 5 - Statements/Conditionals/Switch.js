// However, the full syntax of a switch statement is more complex than this. Various
// locations in the block of code are labeled with the case keyword followed by an expression
// and a colon. case is like a labeled statement, except that instead of giving the
// labeled statement a name, it associates an expression with the statement. When a
// switch executes, it computes the value of expression and then looks for a case label
// whose expression evaluates to the same value (where sameness is determined by the
// === operator). If it finds one, it starts executing the block of code at the statement labeled
// by the case. If it does not find a case with a matching value, it looks for a statement
// labeled default:. If there is no default: label, the switch statement skips the block of
// code altogether.

switch(n) {
    case 1: // Start here if n == 1
        // Execute code block #1.
        break;
        // Stop here
    case 2: // Start here if n == 2
        // Execute code block #2.
        break; // Stop here
    case 3: // Start here if n == 3
        // Execute code block #3.
        break; // Stop here
    default: // If all else fails...
        // Execute code block #4.
        break; // stop here
}