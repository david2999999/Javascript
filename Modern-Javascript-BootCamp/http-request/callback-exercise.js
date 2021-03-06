const getCountry = (countryCode, callback) => {
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target['readyState'] === 4 && e.target['status'] === 200) {
            const data = JSON.parse(e.target['responseText']);
            const country = data.find((country) => country['alpha2Code'] === countryCode);
            callback(undefined, country);
        } else if (e.target['readyState'] === 4) {
            callback('Unable to fetch data', undefined);
        }
    });

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
    countryRequest.send();
};

getCountry('US', (error, country) => {
   if (error) {
        console.log(error);
   } else {
        console.log(`Country name: ${country.name}`);
   }
});