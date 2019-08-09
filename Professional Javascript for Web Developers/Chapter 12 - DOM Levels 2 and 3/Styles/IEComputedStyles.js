// Internet Explorer doesn’t support getComputedStyle(), though it has a similar concept. Every
// element that has a style property also has a currentStyle property. The currentStyle property
// is an instance of CSSStyleDeclaration and contains all of the fi nal computed styles for the
// element. The styles can be retrieved in a similar fashion,
var myDiv = document.getElementById('myDiv');
var computedStyle = myDiv.currentStyle;

alert(computedStyle.backgroundColor); //'red'
alert(computedStyle.width); //'100px'
alert(computedStyle.height); //'200px'
alert(computedStyle.border); //undefined