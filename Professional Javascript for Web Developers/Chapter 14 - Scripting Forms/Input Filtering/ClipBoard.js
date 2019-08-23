// There are three methods on the clipboardData object: getData(), setData(), and clearData().
// The getData() method retrieves string data from the clipboard and accepts a single argument,
// which is the format for the data to retrieve. Internet Explorer specifi es two options: 'text' and
// 'URL'. Firefox, Safari, and Chrome expect a MIME type but will accept 'text' as equivalent to
// 'text/plain'.

// The setData() method is similar: its fi rst argument is the data type, and its second argument is the
// text to place on the clipboard. Once again, Internet Explorer supports 'text' and 'URL' whereas
// Safari and Chrome expect a MIME type. Unlike getData(), however, Safari and Chrome won’t
// recognize the 'text' type.

var EventUtil = {
    //more code here
    getClipboardText: function(event){
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData('text');
    },

    //more code here
    setClipboardText: function(event, value){
        if (event.clipboardData){
            return event.clipboardData.setData('text/plain', value);
        } else if (window.clipboardData){
            return window.clipboardData.setData('text', value);
        }
    },
    //more code here
};