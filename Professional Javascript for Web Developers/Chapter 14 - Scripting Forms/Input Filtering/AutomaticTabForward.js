// <input type='text' name='tel1' id='txtTel1' maxlength='3'>
// <input type='text' name='tel2' id='txtTel2' maxlength='3'>
// <input type='text' name='tel3' id='txtTel3' maxlength='4'>

(function(){
    function tabForward(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        if (target.value.length == target.maxLength){
            var form = target.form;
            for (var i=0, len=form.elements.length; i < len; i++) {
                if (form.elements[i] == target) {
                    if (form.elements[i+1]){
                        form.elements[i+1].focus();
                    }
                    return;
                }
            }
        }
    }
    var textbox1 = document.getElementById('txtTel1');
    var textbox2 = document.getElementById('txtTel2');
    var textbox3 = document.getElementById('txtTel3');
    EventUtil.addHandler(textbox1, 'keyup', tabForward);
    EventUtil.addHandler(textbox2, 'keyup', tabForward);
    EventUtil.addHandler(textbox3, 'keyup', tabForward);
})();

// The tabForward() function is the key to this functionality. It checks to see if the text box’s
// maximum length has been reached by comparing the value to the maxlength attribute. If they’re
// equal (since the browser enforces the maximum, there’s no way it could be more), then the next
// form element needs to be found by looping through the elements collection until the text box is
// found and then setting focus to the element in the next position. This function is then assigned as
// the onkeyup handler for each text box. Since the keyup event fi res after a new character has been
// inserted into the text box, this is the ideal time to check the length of the text box contents. When
// filling out this simple form, the user will never have to press the Tab key to move between fi elds and
// submit the form