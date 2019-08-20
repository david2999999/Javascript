// The eventPhase property aids in determining what phase of event fl ow is currently active. If the event
// handler is called during the capture phase, eventPhase is 1; if the event handler is at the target,
// eventPhase is 2; if the event handler is during the bubble phase, eventPhase is 3. Note that even
// though 'at target' occurs during the bubbling phase, eventPhase is always 2.
var btn = document.getElementById('myBtn');
btn.onclick = function(event){
    alert(event.eventPhase); //2
};
document.body.addEventListener('click', function(event){
    alert(event.eventPhase); //1
}, true);
document.body.onclick = function(event){
    alert(event.eventPhase); //3
};