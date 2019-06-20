// ECMAScript 5 defi nes an additional method called bind(). The bind() method creates a new
// function instance whose this value is bound to the value that was passed into bind(). For example:
window.color = “red”;
var o = { color: “blue” };
function sayColor(){
    alert(this.color);
}

var objectSayColor = sayColor.bind(o);
objectSayColor(); //blue