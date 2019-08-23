function selectText(textbox, startIndex, stopIndex){
    if (textbox.setSelectionRange){
        textbox.setSelectionRange(startIndex, stopIndex);
    } else if (textbox.createTextRange){
        var range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart('character', startIndex);
        range.moveEnd('character', stopIndex - startIndex);
        range.select();
    }
    textbox.focus();
}

// The selectText() function accepts three arguments: the text box to act on, the index at which
// to begin the selection, and the index before which to end the selection. First, the text box is
// tested to determine if it has the setSelectionRange() method. If so, that method is used.
// If setSelectionRange() is not available, then the text box is checked to see if it supports
// createTextRange(). If createTextRange() is supported, then a range is created to accomplish the
// text selection. The last step in the method is to set the focus to the text box so that the selection will
// be visible.
textbox.value = 'Hello world!';
//select all text
selectText(textbox, 0, textbox.value.length); //'Hello world!'
//select first three characters
selectText(textbox, 0, 3); //'Hel'
//select characters 4 through 6
selectText(textbox, 4, 7); //'o w'