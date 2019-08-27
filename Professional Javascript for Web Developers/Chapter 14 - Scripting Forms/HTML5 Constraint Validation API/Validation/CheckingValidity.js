// You can check if any given fi eld on the form is valid by using the checkValidity() method. This
// method is provided on all elements and returns true if the fi eld’s value is valid or false if not.
// Whether or not a fi eld is valid is based on the conditions previously mentioned in this section, so
// a required fi eld without a value is considered invalid, and a fi eld whose value does not match the
// pattern attribute is considered invalid
if (document.forms[0].elements[0].checkValidity()){
    //field is valid, proceed
} else {
    //field is invalid
}

// To check if the entire form is valid, you can use the checkValidity() method on the form itself.
if(document.forms[0].checkValidity()){
    //form is valid, proceed
} else {
    //form field is invalid
}


if (input.validity && !input.validity.valid){
    if (input.validity.valueMissing){
        alert('Please specify a value.')
    } else if (input.validity.typeMismatch){
        alert('Please enter an email address.');
    } else {
        alert('Value is invalid.');
    }
}