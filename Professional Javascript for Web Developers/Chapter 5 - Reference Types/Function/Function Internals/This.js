// The other special object is called this, which operates similar to the this object in Java and C# though
// isn’t exactly the same. It is a reference to the context object that the function is operating on — often
// called the this value (when a function is called in the global scope of a web page, the this object points
// to window). Consider the following:
window.color = “red”;
var o = { color: “blue” };

function sayColor(){
    alert(this.color);
}
sayColor(); //”red”

o.sayColor = sayColor;
o.sayColor(); //”blue”