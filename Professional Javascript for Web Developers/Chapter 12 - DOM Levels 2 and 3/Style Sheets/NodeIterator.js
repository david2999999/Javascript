// The NodeIterator type is the simpler of the two, and a new instance can be created using the
// document.createNodeIterator() method. This method accepts the following four arguments:
// root — The node in the tree that you want to start searching from.
// whatToShow — A numerical code indicating which nodes should be visited.
// filter — A NodeFilter object or a function indicating whether a particular node should
// be accepted or rejected.
// entityReferenceExpansion — A Boolean value indicating whether entity references
// should be expanded. This has no effect in HTML pages, because entity references are never
// expanded.
var filter = function(node){
    return node.tagName.toLowerCase() == 'p' ?
        NodeFilter.FILTER_ACCEPT :
        NodeFilter.FILTER_SKIP;
};
var iterator = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT,
    filter, false);

var iterator = document.createNodeIterator(document, NodeFilter.SHOW_ALL,
    null, false);