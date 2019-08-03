// Element attributes are represented by the Attr type in the DOM. The Attr type constructor and
// prototype are accessible in all browsers, including Internet Explorer beginning with version 8.
// Technically, attributes are nodes that exist in an element’s attributes property. Attribute nodes
// have the following characteristics:
        // nodeType is 11.
        // nodeName is the attribute name.
        // nodeValue is the attribute value.
        // parentNode is null.
        // Child nodes are not supported in HTML.
        // Child nodes may be Text or EntityReference in XML.

var attr = document.createAttribute('align');
attr.value = 'left';
element.setAttributeNode(attr);
alert(element.attributes['align'].value); //'left'
alert(element.getAttributeNode('align').value); //'left'
alert(element.getAttribute('align')); //'left'

// In this example, a new attribute node is created. The name property is assigned by the call to
// createAttribute(), so there is no need to assign it directly afterward. The value property is then
// assigned to 'left'. To add the newly created attribute to an element, you can use the element’s
// setAttributeNode() method. Once the attribute is added, it can be accessed in any number of ways: via
// the attributes property, using getAttributeNode(), or using getAttribute(). Both attributes and
// getAttributeNode() return the actual Attr node for the attribute, whereas getAttribute() returns
// only the attribute value.