// The differences in how Internet Explorer prior to version 9 and other browsers interpret white
// space in text nodes led to the creation of the children property. The children property is an
// HTMLCollection that contains only an element’s child nodes that are also elements. Otherwise, the
// children property is the same as childNodes and may contain the same items when an element has
// only elements as children. The children property is accessed as follows:
var childCount = element.children.length;
var firstChild = element.children[0];