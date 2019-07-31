// Elements may have any number of children and descendants since elements may be children of
// elements. The childNodes property contains all of the immediate children of the element, which
// may be other elements, text nodes, comments, or processing instructions. There is a signifi cant
// difference between browsers regarding the identifi cation of these nodes. For example, consider the
// following code:
    // <ul id=”myList”>
        // <li>Item 1</li>
        // <li>Item 2</li>
        // <li>Item 3</li>
    // </ul>

// When this code is parsed in Internet Explorer 8 and earlier, the <ul> element has three child nodes,
// one for each of the <li> elements. In all other browsers, the <ul> element has seven elements:
// three <li> elements and four text nodes representing the white space between <li> elements. If
// the white space between elements is removed, as the following example demonstrates, all browsers
// return the same number of child nodes:
    // <ul id=”myList”><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>

// Using this code, all browsers return three child nodes for the <ul> element. It’s important to keep these
// browser differences in mind when navigating children using the childNodes property. Oftentimes, it’s
// necessary to check the nodeType before performing an action, as the following example shows:
for (var i=0, len=element.childNodes.length; i < len; i++){
    if (element.childNodes[i].nodeType == 1){
        //do processing
    }
}