// The ability to change form-fi eld properties dynamically allows you to change the form at any time
// and in almost any way. For example, a common problem with web forms is users’ tendency to click
// the submit button twice. This is a major problem when credit-card orders are involved, because it
// may result in duplicate charges. A very common solution to this problem is to disable the submit
// button once it’s been clicked, which is possible by listening for the submit event and disabling the
// submit button when it occurs.

//Code to prevent multiple form submissions
EventUtil.addHandler(form, 'submit', function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    //get the submit button
    var btn = target.elements['submit-btn'];

    //disable it
    btn.disabled = true;
});