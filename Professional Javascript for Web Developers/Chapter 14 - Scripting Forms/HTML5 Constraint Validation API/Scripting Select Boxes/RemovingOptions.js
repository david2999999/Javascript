selectbox.removeChild(selectbox.options[0]); //remove first option

selectbox.remove(0); //remove first option

selectbox.options[0] = null; //remove first option

// This function simply removes the first option in a select box repeatedly. Since removing the fi rst
// option automatically moves all of the options up one spot, this removes all options
function clearSelectbox(selectbox){
    for(var i=0, len=selectbox.options.length; i < len; i++){
        selectbox.remove(0);
    }
}