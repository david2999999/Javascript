var div = document.getElementById('div1');
var filter = function(node){
    return node.tagName.toLowerCase() == 'li' ?
        NodeFilter.FILTER_ACCEPT :
        NodeFilter.FILTER_SKIP;
};

var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT,filter, false);
var node = iterator.nextNode();
while (node !== null) {
    alert(node.tagName); //output the tag name
    node = iterator.nextNode();
}