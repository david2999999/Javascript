var btn = document.getElementById('myBtn');
btn.addEventListener('click', function(){
    alert(this.id);
}, false);

// This code adds an onclick event handler to a button that will be fi red in the bubbling phase (since
// the last argument is false). As with the DOM Level 0 approach, the event handler runs in the scope
// of the element on which it is attached. The major advantage to using the DOM Level 2 method for
// adding event handlers is that multiple event handlers can be added.
var btn = document.getElementById('myBtn');
btn.addEventListener('click', function(){
    alert(this.id);
}, false);
btn.addEventListener('click', function(){
    alert('Hello world!');
}, false);