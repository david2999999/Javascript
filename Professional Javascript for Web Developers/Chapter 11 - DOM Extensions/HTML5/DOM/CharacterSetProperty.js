// HTML5 describes several new properties dealing with the character set of the document. The
// charset property indicates the actual character set being used by the document and can also be used
// to specify a new character set. By default, this value is 'UTF-16', although it may be changed by
// using <meta> elements or response headers or through setting the charset property directly. Here’s
// an example:
alert(document.charset); //'UTF-16'
document.charset = 'UTF-8';

if (document.charset != document.defaultCharset){
    alert('Custom character set being used.');
}