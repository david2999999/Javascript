var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode('body{background-color:red}'));
var head = document.getElementsByTagName('head')[0];
head.appendChild(style);

// This code works in Firefox, Safari, Chrome, and Opera but not in Internet Explorer. Internet
// Explorer treats <style> nodes as special, similar to <script> nodes, and so won’t allow access to
// its child nodes. In fact, Internet Explorer throws the same error as when you try to add a child node
//to a <script> element. The workaround for Internet Explorer is to access the element’s styleSheet
// property, which in turn has a property called cssText that may be set to CSS code (both of these
// properties are discussed further in Chapter 12), as this code sample shows:
var style = document.createElement('style');
style.type = 'text/css';
try{
    style.appendChild(document.createTextNode('body{background-color:red}'));
} catch (ex){
    style.styleSheet.cssText = 'body{background-color:red}';
}
var head = document.getElementsByTagName('head')[0];
head.appendChild(style);