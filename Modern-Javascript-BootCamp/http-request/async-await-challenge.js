const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');

    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country['alpha2Code'] === countryCode);
    } else {
        throw new Error('Unable to fetch data');
    }
};

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=8fe5f4bc449a6a');

    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch location');
    }
};


const getCurrentCountry = async () => {
   const location = await getLocation();
   const country = await getCountry(location.country);
   return country;
};

getCurrentCountry().then((country) => {
    console.log(country.name);
}).catch((err) => {
    console.log(err);
});