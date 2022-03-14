const loadData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

const displayCountry = (countries) => {
  console.log(countries[0]);
  const country = countries.map((country) => getCountryHtml(country));
  const container = document.getElementById("countries");
  container.innerHTML = country.join(" ");
};

const getCountryHtml = (country) => {
  return `
    <div class="country">
        <img src="${country.flags.png}">
        <h3>Country Name: ${country.name.common}</h3>    
        <h3>population: ${country.population}</h3>   
        <p>Borders : ${country?.borders ? country.borders : "Not Found"}</p>
        <p>Languages : ${
          country?.languages?.spa ? country.languages.spa : "Not Found"
        }</p> 


    </div>
    `;
};

loadData();
