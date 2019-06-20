var stringValue = “Lorem ipsum dolor sit amet, consectetur adipisicing elit”;
var positions = new Array();

var pos = stringValue.indexOf(“e”);
    while(pos > -1){
        positions.push(pos);
    pos = stringValue.indexOf(“e”, pos + 1);
}
alert(positions); //”3,24,32,35,52”

// This example works through a string by constantly increasing the position at which indexOf()
// should begin. It begins by getting the initial position of “e” in the string and then enters a loop that
// continually passes in the last position plus one to indexOf(), ensuring that the search continues
// after the last substring instance. Each position is stored in the positions array so the data can be
// used later.