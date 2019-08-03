// Each node has a childNodes property containing a NodeList. A NodeList is an array-like object
// used to store an ordered list of nodes that are accessible by position. Keep in mind that a NodeList
// is not an instance of Array even though its values can be accessed using bracket notation and the
// length property is present. NodeList objects are unique in that they are actually queries being run
// against the DOM structure, so changes will be refl ected in NodeList objects automatically. It is
// often said that a NodeList is a living, breathing object rather than a snapshot of what happened at
// the time it was fi rst accessed.
var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNodes.item(1);
var count = someNode.childNodes.length;

//won’t work in IE8 and earlier
var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);


// This works in all browsers except Internet Explorer 8 and earlier versions, which throw an error
// because a NodeList is implemented as a COM object and thus cannot be used where a JScript
// object is necessary. To convert a NodeList to an array in Internet Explorer, you must manually
// iterate over the members. The following function works in all browsers:
function convertToArray(nodes){
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0); //non-IE and IE9+
    } catch (ex) {
        array = new Array();
        for (var i=0, len=nodes.length; i < len; i++){
            array.push(nodes[i]);
        }
    }
    return array;
}