// The sibling method to getAttribute() is setAttribute(), which accepts two arguments: the
// name of the attribute to set and the value to set it to. If the attribute already exists, setAttribute()
// replaces its value with the one specifi ed; if the attribute doesn’t exist, setAttribute() creates it and
// sets its value. Here is an example:
div.setAttribute('id', 'someOtherId');
div.setAttribute('class', 'ft');
div.setAttribute('title', 'Some other text');
div.setAttribute('lang','fr');
div.setAttribute('dir', 'rtl');

// The setAttribute() method works with both HTML attributes and custom attributes in the same way.
// Attribute names get normalized to lowercase when set using this method, so 'ID' ends up as 'id'.
// Because all attributes are properties, assigning directly to the property can set the attribute values,
// as shown here:
div.id = 'someOtherId';
div.align = 'left';

// Note that adding a custom property to a DOM element, as the following example shows, does not
// automatically make it an attribute of the element:
div.mycolor = 'red';
alert(div.getAttribute('mycolor')); //null (except in Internet Explorer)