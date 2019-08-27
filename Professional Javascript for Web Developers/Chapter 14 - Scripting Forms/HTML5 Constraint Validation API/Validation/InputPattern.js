// The pattern attribute was introduced for text fi elds in HTML5. This attribute specifies a regular
// expression with which the input value must match. For example, to allow only numbers in a text
// fi eld, the following code applies this constraint:

// <input type='text' pattern='\d+' name='count'>

// As with the alternate input types, specifying a pattern does not prevent the user from entering
// invalid text. The pattern is applied to the value, and the browser then knows if the value is valid or
// not. You can read the pattern by accessing the pattern property
var pattern = document.forms[0].elements['count'].pattern;

// You can also test to see if the browser supports the pattern attribute using this code snippet:
var isPatternSupported = 'pattern' in document.createElement('input');