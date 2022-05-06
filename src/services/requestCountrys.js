async function requestCountrys() {
  try {
    const requestCountryNames = await fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json());

    const filterNames = requestCountryNames.map(
        (country) => country.name.common,
    ).sort();
    return filterNames;
  } catch (error) {
    console.log(error);
  }
}

export default requestCountrys;
