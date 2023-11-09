//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
function getData(cityName) {
  // const name = 'delhi';

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      '&APPID=3014d9588b3cd70eaacbb2fe293a109b'
  )
    .then((data) => data.json())
    .then((parseddata) => {
      const result = parseddata;

      const date = new Date();
      let currentDate = `${date}`;
      const cityName = document.querySelector('.cityName');
      cityName.innerText = result.name + ', ' + result.sys.country;

      const Datee = document.querySelector('.date');
      Datee.innerText = currentDate.slice(0, 15);

      const Weather = document.querySelector('.weather');
      Weather.innerHTML = Math.floor(result.main.temp - 273) + '°C';

      const Climate = document.querySelector('.climate');
      Climate.innerText = result.weather[0].main;

      const Temp = document.querySelector('.temp');
      Temp.innerText =
        Math.floor(result.main.temp_max - 273) +
        '°C / ' +
        Math.floor(result.main.temp_min - 273) +
        '°C';
    });
}

document.getElementById('fetchData').addEventListener('click', function () {
  const locationInput = document.getElementById('locationInput');
  const cityName = locationInput.value;
  getData(cityName);
});
