// Both types of text boxes support a method called select(), which selects all of the text in a text box.
// Most browsers automatically set focus to the text box when the select() method is called (Opera
// does not).
var textbox = document.forms[0].elements['textbox1'];
textbox.select();

// It’s quite common to select all of the text in a text box when it gets focus, especially if the text box
// has a default value. The thinking is that it makes life easier for users when they don’t have to delete
// text separately
EventUtil.addHandler(textbox, 'focus', function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    target.select();
});