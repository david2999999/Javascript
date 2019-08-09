// The getPropertyValue() method always retrieves the string representation of the CSS property
// value. If you need more information, getPropertyCSSValue() returns a CSSValue object that
// has two properties: cssText and cssValueType. The cssText property is the same as the value
// returned from getPropertyValue(). The cssValueType property is a numeric constant indicating
// the type of value being represented: 0 for an inherited value, 1 for a primitive value, 2 for a list,
// or 3 for a custom value.
var prop, value, i, len;
for (i=0, len=myDiv.style.length; i < len; i++){
    prop = myDiv.style[i]; //or myDiv.style.item(i)
    value = myDiv.style.getPropertyCSSValue(prop);
    alert(prop + ' : ' + value.cssText + ' (' + value.cssValueType + ')');
}