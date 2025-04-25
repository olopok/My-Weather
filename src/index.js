import "../css/style.css";
import "../css/toggle-button.css";
import { weatherData } from "./display-current";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#location").value = "";
  let location = "";
  weatherData(location);
  const search = document.querySelector("#search");
  search.addEventListener("click", (e) => {
    const titleContainer = document.querySelector(".title-container");
    titleContainer.innerHTML = "";
    e.stopImmediatePropagation();
    location = document.querySelector("#location").value;
    console.log(location);
    weatherData(location);
  });
});
