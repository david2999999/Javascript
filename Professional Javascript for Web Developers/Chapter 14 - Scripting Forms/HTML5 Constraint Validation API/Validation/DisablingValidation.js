// <form method='post' action='signup.php' novalidate>
    // <!-- form elements here -->
// </form>

document.forms[0].noValidate = true; //turn off validation

// If there are multiple submit buttons in a form, you can specify that the form not validate when a
// particular submit button is used by adding the formnovalidate attribute to the button itself:

// <form method='post' action='foo.php'>
    // <!-- form elements here -->
    // <input type='submit' value='Regular Submit'>
    // <input type='submit' formnovalidate name='btnNoValidate' value='Non-validating Submit'>
// </form>

//turn off validation
document.forms[0].elements['btnNoValidate'].formNoValidate = true;