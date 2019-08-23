// <input type='text' name='username' required>

// Any fi eld marked as required must have a value in order for the form to be submitted. This
// attribute applies to <input>, <textarea>, and <select> fi elds (Opera through version 11 doesn’t
// support required on <select>). You can check to see if a form fi eld is required in JavaScript by
// using the corresponding required property on the element:
var isUsernameRequired = document.forms[0].elements['username'].required;

// You can also test to see if the browser supports the required attribute using this code snippet:
var isRequiredSupported = 'required' in document.createElement('input');