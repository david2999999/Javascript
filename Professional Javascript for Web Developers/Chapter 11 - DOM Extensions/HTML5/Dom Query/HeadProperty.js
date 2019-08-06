// HTML5 introduces document.head to point to the <head> element of a document to complement
// document.body, which points to the <body> element of the document. You can retrieve a reference
// to the <head> element using this property or the fallback method:
var head = document.head || document.getElementsByTagName('head')[0];