// CSS styles are included in HTML pages using one of two elements. The <link> element is used
// to include CSS from an external fi le, whereas the <style> element is used to specify inline styles.
// Similar to dynamic scripts, dynamic styles don’t exist on the page when it is loaded initially; rather,
// they are added after the page has been loaded.
// Consider this typical <link> element:
        // <link rel='stylesheet' type='text/css' href='styles.css'>

var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'styles.css';
var head = document.getElementsByTagName('head')[0];
head.appendChild(link);

function loadStyles(url){
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}

loadStyles('styles.css');