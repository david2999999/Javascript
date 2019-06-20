const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=8fe5f4bc449a6a').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch location');
        }
    })
};

// getLocation().then((location) => {
//     console.log(`You are currently in ${location.city}, ${location.region}, ${location.country}`);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// });


const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch data');
        }
    }).then((data) => {
        return data.find((country) => country['alpha2Code'] === countryCode);
    })
};


getLocation().then((location) => {
    return getCountry(location.country);
}).then((country) => {
    console.log(country.name);
}).catch((err) => {
    console.log(`Error: ${err}`);
});