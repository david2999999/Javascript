// <table border='1' width='100%'>
    // <tbody>
        // <tr>
            // <td>Cell 1,1</td>
            // <td>Cell 2,1</td>
        // </tr>
        // <tr>
            // <td>Cell 1,2</td>
            // <td>Cell 2,2</td>
        // </tr>
    // </tbody>
// </table>

//create the table
var table = document.createElement('table');
table.border = 1;
table.width = '100%';

//create the tbody
var tbody = document.createElement('tbody');
table.appendChild(tbody);

//create the first row
var row1 = document.createElement('tr');
tbody.appendChild(row1);
var cell1_1 = document.createElement('td');
cell1_1.appendChild(document.createTextNode('Cell 1,1'));
row1.appendChild(cell1_1);
var cell2_1 = document.createElement('td');
cell2_1.appendChild(document.createTextNode('Cell 2,1'));
row1.appendChild(cell2_1);

//create the second row
var row2 = document.createElement('tr');
tbody.appendChild(row2);
var cell1_2 = document.createElement('td');
cell1_2.appendChild(document.createTextNode('Cell 1,2'));
row2.appendChild(cell1_2);
var cell2_2= document.createElement('td');
cell2_2.appendChild(document.createTextNode('Cell 2,2'));
row2.appendChild(cell2_2);

//add the table to the document body
document.body.appendChild(table);