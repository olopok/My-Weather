import "../css/style.css";
import { getWeather } from "./data-request";

// const body = document.querySelector("body");
const data = await getWeather();
console.log(data);

const objCurrent = {
  location: data.resolvedAddress,
  description: data.description,
  currentConditions: data.currentConditions.conditions,
};
console.log("current:", objCurrent);
