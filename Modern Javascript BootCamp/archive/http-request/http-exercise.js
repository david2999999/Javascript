const countryCode = 'US';
const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target['readyState'] === 4 && e.target['status'] === 200) {
        const data = JSON.parse(e.target['responseText']);
        const country = data.find((country) => country['alpha2Code'] === countryCode);
        console.log(country['name']);
    }
});

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
countryRequest.send();