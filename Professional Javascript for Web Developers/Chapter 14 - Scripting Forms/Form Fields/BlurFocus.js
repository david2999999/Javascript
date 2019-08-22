// Each form fi eld has two methods in common: focus() and blur(). The focus() method sets
// the browser’s focus to the form fi eld, meaning that the fi eld becomes active and will respond to
// keyboard events. For example, a text box that receives focus displays its caret and is ready to accept
// input. The focus() method is most often employed to call the user’s attention to some part of
// the page. It’s quite common, for instance, to have the focus moved to the fi rst fi eld in a form when
// the page is loaded. This can be accomplished by listening for the load event and then calling
// focus() on the fi rst field
EventUtil.addHandler(window, 'load', function(event){
    document.forms[0].elements[0].focus();
});

// <input type='text' autofocus>
EventUtil.addHandler(window, 'load', function(event){
    var element = document.forms[0].elements[0];
    if (element.autofocus !== true){
        element.focus(); console.log('JS focus');
    }
});

// The opposite of focus() is blur(), which removes focus from the element. When blur() is
// called, focus isn’t moved to any element in particular; it’s just removed from the fi eld on which
// it was called. This method was used early in web development to create read-only fields before
// the readonly attribute was introduced. There’s rarely a need to call blur(), but it’s available if
// necessary.
document.forms[0].elements[0].blur();