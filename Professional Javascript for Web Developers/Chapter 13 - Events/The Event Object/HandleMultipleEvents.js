var btn = document.getElementById('myBtn');
var handler = function(event){
    switch(event.type){
        case 'click':
            alert('Clicked');
            break;
        case 'mouseover':
            event.target.style.backgroundColor = 'red';
            break;
        case 'mouseout':
            event.target.style.backgroundColor = '';
            break;
    }
};
btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;

// In this example, a single function called handler is defi ned to handle three different events: click,
// mouseover, and mouseout. When the button is clicked, it should pop up an alert, as in the previous
// examples. When the mouse is moved over the button, the background color should change to red,
// and when the mouse is moved away from the button, the background color should revert to its
// default. Using the event.type property, the function is able to determine which event occurred and
// then react appropriately.