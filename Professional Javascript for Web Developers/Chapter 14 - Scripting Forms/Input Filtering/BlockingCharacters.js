// Even though the keypress event should be fi red only when a character key is pressed, some browsers
// fi re it for other keys as well. Firefox and Safari (versions prior to 3.1) fi re keypress for keys like up,
// down, Backspace, and Delete; Safari versions 3.1 and later do not fi re keypress events for these
// keys. This means that simply blocking all characters that aren’t numbers isn’t good enough, because
// you’ll also be blocking these very useful and necessary keys. Fortunately, you can easily detect
// when one of these keys is pressed. In Firefox, all noncharacter keys that fi re the keypress event
// have a character code of 0, whereas Safari versions prior to 3 give them all a character code of 8. To
// generalize the case, you don’t want to block any character codes lower than 10.

// There is still one more issue to handle: copying, pasting, and any other functions that involve the
// Ctrl key. In all browsers but Internet Explorer, the preceding code disallows the shortcut keystrokes
// of Ctrl+C, Ctrl+V, and any other combinations using the Ctrl key

EventUtil.addHandler(textbox, 'keypress', function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var charCode = EventUtil.getCharCode(event);
    if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 &&
        !event.ctrlKey){
        EventUtil.preventDefault(event);
    }
});