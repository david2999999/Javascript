// <div id='div1'>
    // <p><b>Hello</b> world!</p>
    // <ul>
        // <li>List item 1</li>
        // <li>List item 2</li>
        // <li>List item 3</li>
    // </ul>
// </div>

var div = document.getElementById('div1');
var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT,
    null, false);
var node = iterator.nextNode();
while (node !== null) {
    alert(node.tagName); //output the tag name
    node = iterator.nextNode();
}