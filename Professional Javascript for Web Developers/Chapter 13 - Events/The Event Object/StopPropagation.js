var btn = document.getElementById('myBtn');
btn.onclick = function(event){
    alert('Clicked');
    event.stopPropagation();
};
document.body.onclick = function(event){
    alert('Body clicked');
};

// The stopPropagation() method stops the fl ow of an event through the DOM structure immediately,
// canceling any further event capturing or bubbling before it occurs. For example, an event handler
// added directly to a button can call stopPropagation() to prevent an event handler on document
// .body from being fi red