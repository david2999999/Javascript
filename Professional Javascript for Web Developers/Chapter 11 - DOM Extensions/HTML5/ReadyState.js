// Internet Explorer 4 was the fi rst to introduce a readyState property on the document object.
// Other browsers then followed suit and this property was eventually formalized in HTML5. The
// readyState property for document has two possible values:
        // loading — The document is loading.
        // complete — The document is completely loaded

if (document.readyState == 'complete'){
    //do something
}