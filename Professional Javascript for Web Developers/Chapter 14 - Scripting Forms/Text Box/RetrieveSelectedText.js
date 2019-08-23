// Although useful for understanding when text is selected, the select event provides no information
// about what text has been selected. HTML5 solved this issue by introducing some extensions
// to allow for better retrieval of selected text. The specifi cation approach adds two properties to
// text boxes: selectionStart and selectionEnd
function getSelectedText(textbox){
    return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd);
}

// Older versions of Internet Explorer have a document.selection object that contains text-selection
// information for the entire document, which means you can’t be sure where the selected text is on
// the page. When used in conjunction with the select event, however, you can be assured that the
// selection is inside the text box that fi red the event.
function getSelectedText(textbox){
    if (typeof textbox.selectionStart == 'number'){
        return textbox.value.substring(textbox.selectionStart,
            textbox.selectionEnd);
    } else if (document.selection){
        return document.selection.createRange().text;
    }
}