import "../css/style.css";
import { getWeather } from "./data-request";

const body = document.querySelector("body");
const data = await getWeather();
console.log(data);

function currentWeather(data) {
  const obj = data.currentConditions.conditions;
  console.log(obj, "current");
}

currentWeather(data);
