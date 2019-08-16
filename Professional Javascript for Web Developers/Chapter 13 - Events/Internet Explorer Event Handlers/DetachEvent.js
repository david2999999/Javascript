// Events added using attachEvent() are removed using detachEvent() as long as the same arguments
// are provided. As with the DOM methods, this means that anonymous functions cannot be removed
// once they have been added. Event handlers can always be removed as long as a reference to the same
// function can be passed into detachEvent().
var btn = document.getElementById('myBtn');
var handler = function(){
    alert('Clicked');
};
btn.attachEvent('onclick', handler);
//other code here
btn.detachEvent('onclick', handler);