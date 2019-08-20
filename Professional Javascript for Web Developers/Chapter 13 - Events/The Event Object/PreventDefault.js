var link = document.getElementById('myLink');
link.onclick = function(event){
    event.preventDefault();
};

// The preventDefault() method is used to prevent the default action of a particular event. The
// default behavior of a link, for example, is to navigate to the URL specifi ed in its href attribute when
// clicked. If you want to prevent that navigation from occurring, an onclick event handler can cancel
// that behavior