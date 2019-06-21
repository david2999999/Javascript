function assignHandler(){
    var element = document.getElementById('someElement');
    element.onclick = function(){
        alert(element.id);
    };
}
// This code creates a closure as an event handler on element, which in turn creates a circular
// reference (events are discussed in Chapter 13). The anonymous function keeps a reference to the
// assignHandler() function’s activation object, which prevents the reference count for element from
// being decremented. As long as the anonymous function exists, the reference count for element will
// be at least 1, which means the memory will never be reclaimed. This situation can be remedied by
// changing the code slightly, as shown here:
function assignHandler(){
    var element = document.getElementById('someElement');
    var id = element.id;
    element.onclick = function(){
        alert(id);
    };
    element = null;
}

//In this version of the code, a copy of element’s ID is stored in a variable that is used in the closure,
// eliminating the circular reference. That step alone is not enough, however, to prevent the memory
// problem. Remember: the closure has a reference to the containing function’s entire activation object,
// which contains element. Even if the closure doesn’t reference element directly, a reference is still
// stored in the containing function’s activation object. It is necessary, therefore, to set the element
// variable equal to null. This dereferences the COM object and decrements its reference count,
// ensuring that the memory can be reclaimed when appropriate.