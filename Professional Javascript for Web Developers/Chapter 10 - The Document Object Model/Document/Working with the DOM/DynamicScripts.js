// <script type='text/javascript' src='client.js'></script>
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'client.js';
document.body.appendChild(script);


function loadScript(url){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
}