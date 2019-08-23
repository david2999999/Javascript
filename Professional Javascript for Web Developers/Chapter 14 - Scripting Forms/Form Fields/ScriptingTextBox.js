// <input type='text' size='25' maxlength='50' value='initial value'>

// The <textarea> element always renders a multiline text box. To specify how large the text box
// should be, you can use the rows attribute, which specifies the height of the text box in number of
// characters, and the cols attribute, which specifies the width in number of characters, similar to
// size for an <input> element. Unlike <input>, the initial value of a <textarea> must be enclosed
// between <textarea> and </textarea>
// <textarea rows='25' cols='5'>initial value</textarea>

var textbox = document.forms[0].elements['textbox1'];
alert(textbox.value);

// Despite the differences in markup, both types of text boxes store their contents in the value property.
// The value can be used to read the text box value and to set the text box value
textbox.value = 'Some new value';