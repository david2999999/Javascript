// New elements can be created by using the document.createElement() method. This method
// accepts a single argument, which is the tag name of the element to create. In HTML documents, the
// tag name is case-insensitive, whereas it is case-sensitive in XML documents (including XHTML). To
// create a <div> element, the following code can be used:
var div = document.createElement('div');

// Using the createElement() method creates a new element and sets its ownerDocument property. At
// this point, you can manipulate the element’s attributes, add more children to it, and so on. Consider
// the following example:
div.id = 'myNewDiv';
div.className = 'box';

// Setting these attributes on the new element assigns information only. Since the element is not part of
// the document tree, it doesn’t affect the browser’s display. The element can be added to the document
// tree using appendChild(), insertBefore(), or replaceChild(). The following code adds the
// newly created element to the document’s <body> element:
document.body.appendChild(div);