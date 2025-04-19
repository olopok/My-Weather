import { getWeather } from "./data-request";

const data = await getWeather();
console.log(data);

const objCurrentData = {
  location: data.resolvedAddress,
  description: data.description,
  currentConditions: data.currentConditions.conditions,
  dateTime: data.currentConditions.datetime,
  icon: data.currentConditions.icon,
  temp: data.currentConditions.temp,
  precipProb: data.currentConditions.precipprob,
};
console.log("current:", objCurrentData);