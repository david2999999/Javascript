// Event handlers added via addEventListener() can be removed only by using
// removeEventListener() and passing in the same arguments as were used when the handler
// was added. This means that anonymous functions added using addEventListener() cannot be
// removed
var btn = document.getElementById('myBtn');
btn.addEventListener('click', function(){
    alert(this.id);
}, false);

//other code here
btn.removeEventListener('click', function(){ //won’t work!
    alert(this.id);
}, false);

// In this example, an anonymous function is added as an event handler using addEventListener().
// The call to removeEventListener() looks like it’s using the same arguments, but in reality, the
// second argument is a completely different function than the one used in addEventListener(). The
// event handler function passed into removeEventListener() must be the same one that was used in
// addEventListener()
var btn = document.getElementById('myBtn');
var handler = function(){
    alert(this.id);
};

btn.addEventListener('click', handler, false);
//other code here
btn.removeEventListener('click', handler, false); //works!