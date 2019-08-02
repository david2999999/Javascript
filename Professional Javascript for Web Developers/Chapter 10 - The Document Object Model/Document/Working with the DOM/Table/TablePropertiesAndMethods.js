//create the table
var table = document.createElement('table');
table.border = 1;
table.width = '100%';

//create the tbody
var tbody = document.createElement('tbody');
table.appendChild(tbody);

//create the fi rst row
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode('Cell 1,1'));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode('Cell 2,1'));

//create the second row
tbody.insertRow(1);
tbody.rows[1].insertCell(0);
tbody.rows[1].cells[0].appendChild(document.createTextNode('Cell 1,2'));
tbody.rows[1].insertCell(1);
tbody.rows[1].cells[1].appendChild(document.createTextNode('Cell 2,2'));

//add the table to the document body
document.body.appendChild(table);

// In this code, the creation of the <table> and <tbody> elements remains the same. What has
// changed is the section creating the two rows, which now makes use of the HTML DOM table
// properties and methods. To create the fi rst row, the insertRow() method is called on the <tbody>
// element with an argument of 0, which indicates the position in which the row should be placed.
// After that point, the row can be referenced by tbody.rows[0] because it is automatically created
// and added into the <tbody> element in position 0.

// Creating a cell is done in a similar way — by calling insertCell() on the <tr> element and
// passing in the position in which the cell should be placed. The cell can then be referenced by tbody
// .rows[0].cells[0], because the cell has been created and inserted into the row in position 0.