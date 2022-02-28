// "use strict";
// const f = document.getElementById("form");
// const q = document.getElementById("query");
// const google = "https://www.google.com/search?q=site%3A+";
// const site = "pagedart.com";

// function submitted(event) {
//   event.preventDefault();
//   const url = google + site + `+` + q.value;
//   const win = window.open(url, `_blank`);
//   win.focus();
// }
// f.addEventListener("submit", submitted);

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     console.log(this);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.official}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${Math.round(
//               data.population / 1000000
//             )} mln people</p>
//             <p class="country__row"><span>🏛️</span>${data.capital[0]}</p>
//             <p class="country__row"><span>🏢</span>${data.startOfWeek}</p>
//             <p class="country__row"><span>⏲</span>${data.timezones}</p>
//           </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML("afterbegin", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountry("UZBEKISTAN");
// getCountry("JAPAN");
// getCountry("GERMANY");
////////////////////////////////////////////////////////////////////////
const countriesContainer = document.querySelector(".countries");
const renderCountry = (data) => {
  const html = `
    <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${Math.round(
              data.population / 1000000
            )} mln people</p>
            <p class="country__row"><span>🏛️</span>${data.capital[0]}</p>
            <p class="country__row"><span>🏢</span>${data.startOfWeek}</p>
            <p class="country__row"><span>⏲</span>${data.timezones}</p>
          </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("afterbegin", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (res) {
//       console.log(res);
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('uzbekistan')
// // getCountryData('uzbekistan')
// getCountryData('china ')
// getCountryData('egypt')
// getCountryData('korea')
// getCountryData("korea");

// const searchInput = document.getElementById("search");
// const countriesContainer = document.querySelector(".countries");

var countries = [];
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (res) {
      // console.log(res);
      return res.json();
    })
    .then(function (data) {
      // console.log(data);
      renderCountry(data[0]);
    });
};

// getCountryData('uzbekistan');

// const searchInput = document.getElementById("search");
// const formElement = document.querySelector("#form");
// const ulElement = document.querySelector(".ul");
// var countries = [];

const searchInput = document.getElementById("search");
const formElement = document.querySelector("#form");
const ulElement = document.querySelector(".ul");
var countries = [];

async function getCountries(country) {
  let response = await fetch(`https://restcountries.com/v3.1/all${country}`);
  response = await response.json();
  console.log(response);
  response.forEach((element) => {
    searchInput.addEventListener("keyup", function (e) {
      if (element.name.common.toLowerCase().includes(searchInput.value)) {
        // console.clear()
        console.log(element.name.common);
        country.innerHTML = `<h1>${country}</h1>`;
      }
    });
  });
}
console.log(getCountries("usa"));
// searchInput.addEventListener("keyup", function (e) {
//   for (let i = 0; i < getCountries.length; i++) {
//     console.log(getCountries[i]);
//     if (
//       !getCountries[i].name.toLocaleLowerCase().includes(searchInput.value)
//     ) {
//       getCountries[i].style.display = "none";
//     } else if (
//       getCountries[i].body.toLocaleLowerCase().includes(searchInput.value)
//     ) {
//       getCountries[i].style.display = "flex";
//     }
//   }
// });

// searchInput.addEventListener("input", (b) => {
//   const element = b.target.value.toLowerCase();
//   console.log(element);
//   const searchInput = user.filter((user) => user.name);
// });

// const viewCountr = arr =>{
//   let output= ''
//   arr.forEach(({capital,flags,timezones,startOfWeek,name,region,})
//   =>(output +=`

//   <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.official}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${Math.round(
//               data.population / 1000000
//             )} mln people</p>
//             <p class="country__row"><span>🏛️</span>${data.capital[0]}</p>
//             <p class="country__row"><span>🏢</span>${data.startOfWeek}</p>
//             <p class="country__row"><span>⏲</span>${data.timezones}</p>
//           </div>
//     </article>
//   `
//   ));

//   countriesContainer.innerHTML= output;
// }
// document.addEventListener('DOMContentLoaded',getCountries)
