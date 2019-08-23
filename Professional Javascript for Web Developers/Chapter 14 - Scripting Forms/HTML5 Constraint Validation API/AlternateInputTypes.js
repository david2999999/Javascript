// <input type='email' name='email'>
// <input type='url' name='homepage'>

// You can detect if a browser supports these new types by creating an element in JavaScript and
// setting the type property to 'email' or 'url' and then reading the value back. Older browsers
// automatically set unknown values back to 'text', while supporting browsers echo the correct value
// back.
var input = document.createElement('input');
input.type = 'email';

var isEmailSupported = (input.type == 'email');