const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target['readyState'] === 4 && e.target['status'] === 200) {
            const data = JSON.parse(e.target['responseText']);
            const country = data.find((country) => country['alpha2Code'] === countryCode);
            resolve(country);
        } else if (e.target['readyState'] === 4) {
            reject('Unable to fetch data');
        }
    });

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
    countryRequest.send();
});


getCountry('US').then((country) => {
    console.log(country.name);
}, (err) => {
    console.log(`Error: ${err}`);
});