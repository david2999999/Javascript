// With the introduction of Internet Explorer 6 and the ability to render a document in either standards
// or quirks mode, it became necessary to determine in which mode the browser was rendering the
// page. Internet Explorer added a property on the document named compatMode whose sole job
// is to indicate what rendering mode the browser is in. As shown in the following example, when
// in standards mode, document.compatMode is equal to 'CSS1Compat'; when in quirks mode,
// document.compatMode is 'BackCompat':
if (document.compatMode == 'CSS1Compat'){
    alert('Standards mode');
} else {
    alert('Quirks mode');
}