var selectbox = document.forms[0].elements['location'];

// Most of the <option> properties are used for faster access to the option data. Normal DOM
// functionality can be used to access this information, but it’s quite inefficient
//not recommended
var text = selectbox.options[0].firstChild.nodeValue; //option text
var value = selectbox.options[0].getAttribute('value'); //option value

// This code gets the text and value of the fi rst option in the select box using standard DOM
// techniques
var selectbox = document.forms[0].elements['location'];
//preferred
var text = selectbox.options[0].text; //option text
var value = selectbox.options[0].value; //option value