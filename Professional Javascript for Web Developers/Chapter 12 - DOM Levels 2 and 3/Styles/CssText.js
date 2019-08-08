// The cssText property allows access to the CSS code of the style. When used in read mode, cssText
// returns the browser’s internal representation of the CSS code in the style attribute. When used
// in write mode, the value assigned to cssText overwrites the entire value of the style attribute,
//  meaning that all previous style information specified using the attribute is lost. For instance,
// if the element has a border specified via the style attribute and you overwrite cssText with
//  rules that don’t include the border, it is removed from the element. The cssText property is used
// as follows:
myDiv.style.cssText = 'width: 25px; height: 100px; background-color: green';
alert(myDiv.style.cssText);

// Setting the cssText property is the fastest way to make multiple changes to an element’s style
// because all of the changes are applied at once.