// Making a HTTP request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if (e.target['readyState'] === 4 && e.target['status'] === 200) {
        const data = JSON.parse(e.target['responseText']);
        console.log(data);
    } else if (e.target['readyState'] === 4) {
        console.log('Error retrieving data');
    }
});

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
request.send();