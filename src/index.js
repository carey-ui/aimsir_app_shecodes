function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");
  let description = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed);
  let iconElement = document.querySelector("#current-temperature-icon");
  let iconUrl = response.data.condition.icon_url;

  cityElement.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${wind}kmph`;
  iconElement.setAttribute("src", iconUrl);
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "acbod87f7ctb68340e47b7b3abe9ae79";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Dublin");

let now = new Date();

let currentInput = document.querySelector("#time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");

currentInput.innerHTML = `${day} ${hours}:${minutes}`;

if (hours >= 20 || hours < 6) {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.removeAttribute("data-theme");
}
