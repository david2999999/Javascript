// Though the DOM specifi cation states that the children of a Document node can be a DocumentType,
// Element, ProcessingInstruction, or Comment, there are two built-in shortcuts to child nodes. The
// fi rst is the documentElement property, which always points to the <html> element in an HTML page.
// The document element is always represented in the childNodes list as well, but the documentElement
// property gives faster and more direct access to that element. Consider the following simple page:
// <html>
    // <body>
    // </body>
// </html>
// When this page is parsed by a browser, the document has only one child node, which is the <html>
// element. This element is accessible from both documentElement and the childNodes list, as shown here:

var html = document.documentElement; //get reference to <html>
alert(html === document.childNodes[0]); //true
alert(html === document.firstChild); //true