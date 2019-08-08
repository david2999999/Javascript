var myDiv = document.getElementById('myDiv');

//set the background color
myDiv.style.backgroundColor = 'red';

//change the dimensions
myDiv.style.width = '100px';
myDiv.style.height = '200px';

//assign a border
myDiv.style.border = '1px solid black';

// <div id='myDiv' style='background-color: blue; width: 10px; height: 25px'></div>
alert(myDiv.style.backgroundColor); //'blue'
alert(myDiv.style.width); //'10px'
alert(myDiv.style.height); //'25px'