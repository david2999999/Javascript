// The if statement is the fundamental control statement that allows JavaScript to make
// decisions, or, more precisely, to execute statements conditionally. This statement has
// two forms. The first is:
//     if (expression)
//         statement

// In this form, expression is evaluated. If the resulting value is truthy, statement is executed.
//     If expression is falsy, statement is not executed. (See §3.3 for a definition of
// truthy and falsy values.) For example:
if (username == null) // If username is null or undefined,
    username = "John Doe"; // define it

//Or similarly:
// If username is null, undefined, false, 0, "", or NaN, give it a new value
if (!username) username = "John Doe";

// The second form of the if statement introduces an else clause that is executed when
// expression is false. Its syntax is:
//     if (expression)
//         statement1
//     else
//         statement2

// This form of the statement executes statement1 if expression is truthy and executes
// statement2 if expression is falsy. For example:
if (n == 1)
    console.log("You have 1 new message.");
else
    console.log("You have " + n + " new messages.");