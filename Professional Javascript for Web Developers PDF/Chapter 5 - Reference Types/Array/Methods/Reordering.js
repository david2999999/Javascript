var values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); //5,4,3,2,1

var values = [0, 1, 5, 10, 15];
values.sort();
alert(values); //0,1,10,15,5


function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); //0,1,5,10,15