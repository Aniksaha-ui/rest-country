const loadData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};

const displayCountry = (countries) => {
  // console.log(countries[0]);
  const country = countries.map((country) => getCountryHtml(country));
  const container = document.getElementById("countries");
  container.innerHTML = country.join(" ");
};

// original
// const getCountryHtml = (country) => {
//   //  destructureing
//   const { flags, name, population, borders, languages } = country;

//   // console.log(flags, name, population, borders, languages);

//   return `
//     <div class="country">
//         <img src="${flags.png}">
//         <h3>Country Name: ${name.common}</h3>
//         <h3>population: ${population}</h3>
//         <p>Borders : ${borders ? borders : "Not Found"}</p>
//         <p>Languages : ${languages?.spa ? languages.spa : "Not Found"}</p>

//     </div>
//     `;
// };

// parameter destructureing
const getCountryHtml = ({ name, flags, population, borders, languages }) => {
  return `
    <div class="country">
        <img src="${flags.png}">
        <h3>Country Name: ${name.common}</h3>    
        <h3>population: ${population}</h3>   
        <p>Borders : ${borders ? borders : "Not Found"}</p>
        <p>Languages : ${languages?.spa ? languages.spa : "Not Found"}</p> 
    </div>
    `;
};

loadData();
