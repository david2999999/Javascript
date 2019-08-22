// The focus and blur events are typically used to change the user interface in some way, to provide
// either visual cues or additional functionality (such as showing a drop-down menu of options for
// a text box). The change event is typically used to validate data that was entered into a fi eld. For
// example, consider a text box that expects only numbers to be entered. The focus event may be used
// to change the background color to more clearly indicate that the fi eld has focus, the blur event can
// be used to remove that background color, and the change event can change the background color to
// red if nonnumeric characters are entered
var textbox = document.forms[0].elements[0];
EventUtil.addHandler(textbox, 'focus', function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    if (target.style.backgroundColor != 'red'){
        target.style.backgroundColor = 'yellow';
    }
});

EventUtil.addHandler(textbox, 'blur', function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    if (/[^\d]/.test(target.value)){
        target.style.backgroundColor = 'red';
    } else {
        target.style.backgroundColor = '';
    }
});

EventUtil.addHandler(textbox, 'change', function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    if (/[^\d]/.test(target.value)){
        target.style.backgroundColor = 'red';
    } else {
        target.style.backgroundColor = '';
    }
});
