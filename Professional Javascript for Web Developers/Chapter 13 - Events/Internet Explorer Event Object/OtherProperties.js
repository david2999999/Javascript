// The returnValue property is the equivalent of the DOM preventDefault() method in that it
// cancels the default behavior of a given event. You need only set returnValue to false to prevent
// the default action.
var link = document.getElementById('myLink');
link.onclick = function(){
    window.event.returnValue = false;
};

// The cancelBubble property performs the same action as the DOM stopPropagation() method:
// it stops the event from bubbling. Since Internet Explorer 8 and earlier don’t support the capturing
// phase, only bubbling is canceled, whereas stopPropagation() stops both capturing and bubbling.
var btn = document.getElementById('myBtn');
btn.onclick = function(){
    alert('Clicked');
    window.event.cancelBubble = true;
};
document.body.onclick = function(){
    alert('Body clicked');
};