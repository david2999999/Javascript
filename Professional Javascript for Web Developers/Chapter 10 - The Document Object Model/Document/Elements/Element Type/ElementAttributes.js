// <div id='myDiv' class='bd' title='Body text' lang='en' dir='ltr'></div>

// All of the information specifi ed by this element may be retrieved using the following JavaScript code:
var div = document.getElementById('myDiv');
alert(div.id); //'myDiv'
alert(div.className); //'bd'
alert(div.title); //'Body text'
alert(div.lang); //'en'
alert(div.dir); //'ltr'

// It’s also possible to use the following code to change each of the attributes by assigning new values
// to the properties:
div.id = 'someOtherId';
div.className = 'ft';
div.title = 'Some other text';
div.lang = 'fr';
div.dir ='rtl';