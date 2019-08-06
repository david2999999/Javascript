// HTML5 introduces a way to manipulate class names in a much simpler and safer manner through
// the addition of the classList property for all elements. The classList property is an instance of a
// new type of collection named DOMTokenList. As with other DOM collections, DOMTokenList has a
// length property to indicate how many items it contains, and individual items may be retrieved via
// the item() method or using bracket notation. It also has the following additional methods:

    // add(value) — Adds the given string value to the list. If the value already exists, it will
                    // not be added.

    // contains(value) — Indicates if the given value exists in the list (true if so; false if not).

    // remove(value) — Removes the given string value from the list.

    // toggle(value) — If the value already exists in the list, it is removed. If the value doesn’t
                        // exist, then it’s added.
//remove the 'disabled' class
div.classList.remove('disabled');

//add the 'current' class
div.classList.add('current');

//toggle the 'user' class
div.classList.toggle('user');

//figure out what’s on the element now
if (div.classList.contains('bd') && !div.classList.contains('disabled')) {
    //do something
}

//iterate over the class names
for (var i=0, len=div.classList.length; i < len; i++){
    doSomething(div.classList[i]);
}