var btn = document.getElementById('myBtn');
btn.onclick = function(event){
    alert(event.type); //'click'
};

btn.addEventListener('click', function(event){
    alert(event.type); //'click'
}, false);


var btn = document.getElementById('myBtn');
btn.onclick = function(event){
    alert(event.currentTarget === this); //true
    alert(event.target === this); //true
};

document.body.onclick = function(event){
    alert(event.currentTarget === document.body); //true
    alert(this === document.body); //true
    alert(event.target === document.getElementById('myBtn')); //true
};