import { getWeather } from "./data-request";
import { icons, iconsName } from "./icons-mod";

const unitsCelsius = String.fromCharCode(8451);
const unitFahrenheit = String.fromCharCode(8457);
const percentageSymbol = String.fromCharCode(37);
let objCurrentData;

let unitGroup = "uk";
const toggleUnits = document.querySelector("input[type=checkbox]");
toggleUnits.addEventListener("click", (e) => {
  unitGroup === "uk" ? (unitGroup = "us") : (unitGroup = "uk");
  updateTemperatureDisplay();
  e.stopImmediatePropagation();
  console.log(unitGroup);
});

export async function weatherData(location) {
  const data = await getWeather(location);
  objCurrentData = {
    location: data.resolvedAddress,
    description: data.description,
    currentConditions: data.currentConditions.conditions,
    dateTime: data.currentConditions.datetime,
    icon: data.currentConditions.icon,
    temp: data.currentConditions.temp,
    feelsLike: data.currentConditions.feelslike,
    precipProb: data.currentConditions.precipprob,
    days: data.days,
  };
  console.log("obj", objCurrentData);
  locationContainer();
  daysFiveUI();
}

// Conversion functions
const fahrenheitToCelsius = (fahrenheit) =>
  (((fahrenheit - 32) * 5) / 9).toFixed(1);
const celsiusToFahrenheit = (celsius) => ((celsius * 9) / 5 + 32).toFixed(1);

// Update temperature display based on unitGroup
const updateTemperatureDisplay = () => {
  const tempElement = document.getElementById("item-f");
  const feelsLikeElement = document.getElementById("item-g");

  if (unitGroup === "us") {
    tempElement.textContent = `Temperature: ${celsiusToFahrenheit(objCurrentData.temp)} ${unitFahrenheit}`;
    feelsLikeElement.textContent = `Feels like: ${celsiusToFahrenheit(objCurrentData.feelsLike)} ${unitFahrenheit}`;
  } else {
    tempElement.textContent = `Temperature: ${objCurrentData.temp} ${unitsCelsius}`;
    feelsLikeElement.textContent = `Feels like: ${objCurrentData.feelsLike} ${unitsCelsius}`;
  }
};

// create location container
export function locationContainer() {
  const titleContainer = document.querySelector(".title-container");
  const title = document.createElement("h1");
  title.setAttribute("id", "item-a");
  const paragraph = document.createElement("p");
  paragraph.setAttribute("id", "item-b");
  const dateTime = document.createElement("span");
  dateTime.setAttribute("id", "item-c");
  const conditions = document.createElement("p");
  conditions.setAttribute("id", "item-d");
  const icon = document.createElement("img");
  icon.classList.add("weather-icon");
  icon.setAttribute("id", "item-e");
  icon.src = `${icons[iconsName(objCurrentData.icon)]}`;
  const temp = document.createElement("span");
  temp.setAttribute("id", "item-f");
  const feelsLike = document.createElement("span");
  feelsLike.setAttribute("id", "item-g");
  const precip = document.createElement("span");
  precip.setAttribute("id", "item-h");

  title.textContent = objCurrentData.location;
  paragraph.textContent = objCurrentData.description;
  dateTime.textContent = objCurrentData.dateTime;
  conditions.textContent = objCurrentData.currentConditions;
  temp.textContent = `Temperature: ${objCurrentData.temp} ${unitsCelsius}`;
  feelsLike.textContent = `Feels like: ${objCurrentData.feelsLike} ${unitsCelsius}`;
  precip.textContent = `Rain chance: ${objCurrentData.precipProb} ${percentageSymbol}`;
  titleContainer.appendChild(title);
  titleContainer.appendChild(paragraph);
  titleContainer.appendChild(dateTime);
  titleContainer.appendChild(conditions);
  titleContainer.appendChild(icon);
  titleContainer.appendChild(temp);
  titleContainer.appendChild(feelsLike);
  titleContainer.appendChild(precip);
}

export function daysFiveUI() {
  const daysContainer = document.querySelector(".days-container");
  daysContainer.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const day = document.createElement("div");
    day.classList.add("single-day-container");
    const date = document.createElement("span");
    date.id = i + 1;
    let newDate = objCurrentData.days[i].datetime.split("-");
    newDate = newDate.toReversed().join("-");
    date.textContent = newDate;
    const icon = document.createElement("img");
    icon.classList.add("weather-icon");
    icon.id = "day-icon";
    icon.src = `${icons[iconsName(objCurrentData.days[i].icon)]}`;
    day.appendChild(date);
    day.appendChild(icon);
    daysContainer.appendChild(day);
  }
}
