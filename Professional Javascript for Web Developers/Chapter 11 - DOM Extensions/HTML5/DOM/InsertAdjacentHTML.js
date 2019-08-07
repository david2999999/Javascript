// The last addition for markup insertion is the insertAdjacentHTML() method. This method also
// originated in Internet Explorer and accepts two arguments: the position in which to insert and the
// HTML text to insert. The fi rst argument must be one of the following values:
    // 'beforebegin' — Insert just before the element as a previous sibling.
    // 'afterbegin' — Insert just inside of the element as a new child or series of children
    // before the first child.
    // 'beforeend' — Insert just inside of the element as a new child or series of children after
    // the last child.
    // 'afterend' — Insert just after the element as a next sibling.

//insert as previous sibling
element.insertAdjacentHTML('beforebegin', '<p>Hello world!</p>');
//insert as first child
element.insertAdjacentHTML('afterbegin', '<p>Hello world!</p>');
//insert as last child
element.insertAdjacentHTML('beforeend', '<p>Hello world!</p>');
//insert as next sibling
element.insertAdjacentHTML('afterend', '<p>Hello world!</p>');