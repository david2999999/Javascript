var btn = document.getElementById('myBtn');
btn.onclick = function(event){
    alert(event.type); //'click'
};

btn.addEventListener('click', function(event){
    alert(event.type); //'click'
}, false);