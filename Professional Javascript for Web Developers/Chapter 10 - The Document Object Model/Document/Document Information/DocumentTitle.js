// The fi rst such property is title, which contains the text in the <title> element and
// is displayed in the title bar or tab of the browser window. This property can be used to retrieve the
// current page title and to change the page title such that the changes are refl ected in the browser title
// bar. Changing the value of the title property does not change the <title> element at all. Here is
// an example:

//get the document title
var originalTitle = document.title;

//set the document title
document.title = 'New page title';