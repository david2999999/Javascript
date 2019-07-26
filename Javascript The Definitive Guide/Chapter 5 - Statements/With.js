// The with statement is used to temporarily extend
// the scope chain. It has the following syntax:
    // with (object)
        // statement

// This statement adds object to the front of the scope chain, executes statement, and
// then restores the scope chain to its original state.
// The with statement is forbidden in strict mode (see §5.7.3) and should be considered
// deprecated in non-strict mode: avoid using it whenever possible. JavaScript code that
// uses with is difficult to optimize and is likely to run more slowly than the equivalent
// code written without the with statement.

document.forms[0].address.value
// If you need to write expressions like this a number of times, you can use the with
// statement to add the form object to the scope chain:
with(document.forms[0]) {
    // Access form elements directly here. For example:
    name.value = "";
    address.value = "";
    email.value = "";
}

// This reduces the amount of typing you have to do: you no longer need to prefix each
// form property name with document.forms[0]. That object is temporarily part of the
// scope chain and is automatically searched when JavaScript needs to resolve an identifier
// such as address. It is just as simple, of course, to avoid the with statement and write
// the code above like this:
var f = document.forms[0];
f.name.value = "";
f.address.value = "";
f.email.value = "";