var btn = document.getElementById('myBtn');
btn.attachEvent('onclick', function(){
    alert('Clicked');
});
btn.attachEvent('onclick', function(){
    alert('Hello world!');
});

// Here, attachEvent() is called twice, adding two different event handlers to the same button. Unlike
// the DOM method, though, the event handlers fi re in reverse of the order they were added. When the
// button in this example is clicked, the fi rst alert says 'Hello world!' and the second says 'Clicked'.