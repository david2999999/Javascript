var btn = document.getElementById('myBtn');
btn.onclick = function(){
    alert('Clicked');
};

// Here, a button is retrieved from the document and an onclick event handler is assigned. Note that
// the event handler isn’t assigned until this code is run, so if the code appears after the code for the
// button in the page, there may be an amount of time during which the button will do nothing when
// clicked.

// When assigning event handlers using the DOM Level 0 method, the event handler is considered
// to be a method of the element. The event handler, therefore, is run within the scope of element,
// meaning that this is equivalent to the element

var btn = document.getElementById('myBtn');
btn.onclick = function(){
    alert(this.id); //'myBtn'
};