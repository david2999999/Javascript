// The length property is designed for use in conjunction with the item() method for iterating
// over the CSS properties defi ned on an element. With these, the style object effectively becomes a
// collection, and bracket notation can be used in place of item() to retrieve the CSS property name in
// the given position, as shown in the following example
for (var i=0, len=myDiv.style.length; i < len; i++){
    alert(myDiv.style[i]); //or myDiv.style.item(i)
}

// Using either bracket notation or item(), you can retrieve the CSS property name ('backgroundcolor',
// not 'backgroundColor'). This property name can then be used in getPropertyValue()
// to retrieve the actual value of the property, as shown in the following example:
var prop, value, i, len;
for (i=0, len=myDiv.style.length; i < len; i++){
    prop = myDiv.style[i]; //or myDiv.style.item(i)
    value = myDiv.style.getPropertyValue(prop);
    alert(prop + ' : ' + value);
}