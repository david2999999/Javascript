// The continue statement is similar to the break statement. Instead of exiting a loop,
// however, continue restarts a loop at the next iteration. The continue statement’s syntax
// is just as simple as the break statement’s:
    // continue;
// The continue statement can also be used with a label:
    // continue labelname;
// The continue statement, in both its labeled and unlabeled forms, can be used only
// within the body of a loop. Using it anywhere else causes a syntax error.

// The following example shows an unlabeled continue statement being used to skip the
// rest of the current iteration of a loop when an error occurs:
for(i = 0; i < data.length; i++) {
    if (!data[i]) continue; // Can't proceed with undefined data
    total += data[i];
}

// Like the break statement, the continue statement can be used in its labeled form within
// nested loops, when the loop to be restarted is not the immediately enclosing loop. Also,
//     like the break statement, line breaks are not allowed between the continue statement
// and its labelname.