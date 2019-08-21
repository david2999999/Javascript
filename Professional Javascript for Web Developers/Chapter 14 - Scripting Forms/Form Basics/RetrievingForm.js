// References to <form> elements can be retrieved in a number of different ways. The most common
// way is to treat them as any other elements and assign the id attribute, allowing the use of
// getElementById(),
var form = document.getElementById('form1');

// All forms on the page can also be retrieved from document.forms collection. Each form can be
// accessed in this collection by numeric index and by name
var firstForm = document.forms[0]; //get the first form in the page
var myForm = document.forms['form2']; //get the form with a name of 'form2'