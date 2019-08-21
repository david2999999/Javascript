// When a form is submitted in this manner, the submit event fi res right before the request is sent to
// the server. This gives you the opportunity to validate the form data and decide whether to allow the
// form submission to occur. Preventing the event’s default behavior cancels the form submission. For
// example, the following prevents a form from being submitted:
var form = document.getElementById('myForm');
EventUtil.addHandler(form, 'submit', function(event){
//get event object
    event = EventUtil.getEvent(event);
//prevent form submission
    EventUtil.preventDefault(event);
});

// This code uses the EventUtil object from the previous chapter to provide cross-browser event
// handling. The preventDefault() method stops the form from being submitted. Typically, this
// functionality is used when data in the form is invalid and should not be sent to the server.
// It’s possible to submit a form programmatically by calling the submit() method from JavaScript.
// This method can be called at any time to submit a form and does not require a submit button to be
// present in the form to function appropriately.

var form = document.getElementById('myForm');
//submit the form
form.submit();