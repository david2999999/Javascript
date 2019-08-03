var div = document.getElementById('myDiv');
alert(div.getAttribute('id')); //'myDiv'
alert(div.getAttribute('class')); //'bd'
alert(div.getAttribute('title')); //'Body text'
alert(div.getAttribute('lang')); //'en'
alert(div.getAttribute('dir')); //'ltr'

// The getAttribute() method can also retrieve the value of custom attributes that aren’t part of the
// formal HTML language. Consider the following element:
    // <div id='myDiv' my_special_attribute='hello!'></div>
// In this element, a custom attribute named my_special_attribute is defined to have a value
// of 'hello!'.

var value = div.getAttribute('my_special_attribute');