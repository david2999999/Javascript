// Unlike the DOM event object, the Internet Explorer event object is accessible in different ways
// based on the way in which the event handler was assigned. When an event handler is assigned using
// the DOM Level 0 approach, the event object exists only as a property of the window object
var btn = document.getElementById('myBtn');
btn.onclick = function(){
    var event = window.event;
    alert(event.type); //'click'
};

// Here, the event object is retrieved from window.event and then used to determine the type of event
// that was fi red (the type property for Internet Explorer is identical to that of the DOM version).
// However, if the event handler is assigned using attachEvent(), the event object is passed in as the
// sole argument to the function
var btn = document.getElementById('myBtn');
btn.attachEvent('onclick', function(event){
    alert(event.type); //'click'
});