// When a form is reset by the user clicking a reset button, the reset event fi res. This event gives
// you the opportunity to cancel the reset if necessary.
var form = document.getElementById('myForm');

EventUtil.addHandler(form, 'reset', function(event){
    //get event object
    event = EventUtil.getEvent(event);
    //prevent form reset
    EventUtil.preventDefault(event);
});

// Form resetting is typically a frowned-upon approach to web form design. It’s often
// disorienting to the user and, when triggered accidentally, can be quite frustrating.
// There’s almost never a need to reset a form. It’s often enough to provide a cancel
// button that takes the user back to the previous page rather than explicitly to revert
// all values in the form