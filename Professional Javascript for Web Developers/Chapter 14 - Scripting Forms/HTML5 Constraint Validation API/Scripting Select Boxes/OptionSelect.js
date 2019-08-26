var selectedOption = selectbox.options[selectbox.selectedIndex];

var selectedIndex = selectbox.selectedIndex;
var selectedOption = selectbox.options[selectedIndex];
alert('Selected index: ' + selectedIndex + '\nSelected text: ' +
    selectedOption.text + '\nSelected value: ' + selectedOption.value);

function getSelectedOptions(selectbox){
    var result = new Array();
    var option = null;
    for (var i=0, len=selectbox.options.length; i < len; i++){
        option = selectbox.options[i];
        if (option.selected){
            result.push(option);
        }
    }
    return result;
}


var selectbox = document.getElementById('selLocation');
var selectedOptions = getSelectedOptions(selectbox);
var message = '';
for (var i=0, len=selectedOptions.length; i < len; i++){
    message += 'Selected index: ' + selectedOptions[i].index +
'\nSelected text: ' + selectedOptions[i].text +
'\nSelected value: ' + selectedOptions[i].value + '\n\n';
}
alert(message);