// Replacing child nodes using the methods in this section may cause memory problems in browsers,
// especially Internet Explorer. The problem occurs when event handlers or other JavaScript objects are
// assigned to subtree elements that are removed. If an element has an event handler (or a JavaScript
// object as a property), and one of these properties is used in such a way that the element is removed
// from the document tree, the binding between the element and the event handler remains in memory.
// If this is repeated frequently, memory usage increases for the page. When using innerHTML,
// outerHTML, and insertAdjacentHTML(), it’s best to manually remove all event handlers and
// JavaScript object properties on elements that are going to be removed. (Event handlers are discussed
// further in Chapter 13.)

// Using these properties does have an upside, especially when using innerHTML. Generally speaking,
// inserting a large amount of new HTML is more effi cient through innerHTML than through multiple
// DOM operations to create nodes and assign relationships between them. This is because an HTML
// parser is created whenever a value is set to innerHTML (or outerHTML). This parser runs in browserlevel
// code (often written in C++), which is must faster than JavaScript. That being said, the creation
// and destruction of the HTML parser does have some overhead, so it’s best to limit the number of
// times you set innerHTML or outerHTML. For example, the following creates a number of list items
// using innerHTML:
for (var i=0, len=values.length; i < len; i++){
    ul.innerHTML += '<li>' + values[i] + '</li>'; //avoid!!
}

// This code is inefficient, because it sets innerHTML once each time through the loop. Furthermore,
// this code is reading innerHTML each time through the loop, meaning that innerHTML is being
// accessed twice each time through the loop. It’s best to build up the string separately and assign it
// using innerHTML just once at the end,
var itemsHtml = '';
for (var i=0, len=values.length; i < len; i++){
    itemsHtml += '<li>' + values[i] + '</li>';
}
ul.innerHTML = itemsHtml;