var btn = document.getElementById('myBtn');
btn.onclick = function(){
    alert(window.event.srcElement === this); //true
};

btn.attachEvent('onclick', function(event){
    alert(event.srcElement === this); //false
});