// When you are done using a range, it is best to call the detach() method, which detaches the
// range from the document on which it was created. After calling detach(), the range can be safely
// dereferenced, so the memory can be reclaimed through garbage collection.
range.detach(); //detach from document
range = null; //dereferenced