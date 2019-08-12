// <div id='div1'>
    // <p><b>Hello</b> world!</p>
    // <ul>
        // <li>List item 1</li>
        // <li>List item 2</li>
        // <li>List item 3</li>
    // </ul>
// </div>

// Perhaps this is too much information and you really only want to return the <li> elements that
// occur in the traversal.
var div = document.getElementById('div1');
var filter = function(node){
    return node.tagName.toLowerCase() == 'li' ?
        NodeFilter.FILTER_ACCEPT :
        NodeFilter.FILTER_SKIP;
};

var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT,
    filter, false);
var node = iterator.nextNode();
while (node !== null) {
    alert(node.tagName); //output the tag name
    node = iterator.nextNode();
}
