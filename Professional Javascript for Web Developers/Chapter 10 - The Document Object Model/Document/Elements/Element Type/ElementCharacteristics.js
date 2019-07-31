// <div id='myDiv'></div>

var div = document.getElementById('myDiv');
alert(div.tagName); //'DIV'
alert(div.tagName == div.nodeName); //true

// The element in question has a tag name of div and an ID of 'myDiv'. Note, however, that div
// .tagName actually outputs 'DIV' instead of 'div'. When used with HTML, the tag name is always
// represented in all uppercase; when used with XML (including XHTML), the tag name always
// matches the case of the source code. If you aren’t sure whether your script will be on an HTML
// or XML document, it’s best to convert tag names to a common case before comparison, as this
// example shows:

if (element.tagName == 'div'){ //AVOID! Error prone!
//do something here
}
if (element.tagName.toLowerCase() == 'div'){ //Preferred - works in all documents
//do something here
}