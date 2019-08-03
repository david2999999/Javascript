// The Element type is the only DOM node type that uses the attributes property. The attributes
// property contains a NamedNodeMap, which is a 'live' collection similar to a NodeList. Every
// attribute on an element is represented by an Attr node, each of which is stored in the NamedNodeMap
// object. A NamedNodeMap object has the following methods:

        // getNamedItem(name) — Returns the node whose nodeName property is equal to name.

        // removeNamedItem(name) — Removes the node whose nodeName property is equal to name
        // from the list.

        // setNamedItem(node) — Adds the node to the list, indexing it by its nodeName property.

        // item(pos) — Returns the node in the numerical position pos.

// Each node in the attributes property is a node whose nodeName is the attribute name and whose
// nodeValue is the attribute’s value. To retrieve the id attribute of an element, you can use the
// following code:
var id = element.attributes.getNamedItem('id').nodeValue;

var id = element.attributes['id'].nodeValue;

// It’s possible to use this notation to set attribute values as well, retrieving the attribute node and then
// setting the nodeValue to a new value, as this example shows:
element.attributes['id'].nodeValue = 'someOtherId';

// The removeNamedItem() method functions the same as the removeAttribute() method on the
// element — it simply removes the attribute with the given name. The following example shows how
// the sole difference is that removeNamedItem() returns the Attr node that represented the attribute:
var oldAttr = element.attributes.removeNamedItem('id');

// The setNamedItem() is a rarely used method that allows you to add a new attribute to the element
// by passing in an attribute node, as shown in this example:
element.attributes.setNamedItem(newAttr);