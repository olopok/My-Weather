import { getDefaultWeather } from "./data-request";

let data = await getDefaultWeather();
console.log(data);

const objCurrentData = {
  location: data.resolvedAddress,
  description: data.description,
  currentConditions: data.currentConditions.conditions,
  dateTime: data.currentConditions.datetime,
  icon: data.currentConditions.icon,
  temp: data.currentConditions.temp,
  feelsLike: data.currentConditions.feelslike,
  precipProb: data.currentConditions.precipprob,
};
console.log("current:", objCurrentData.icon);
// const src = `./icons/${objCurrentData.icon}.svg`;
// console.log('src: ', src)

// create location container
export const locationContainer = () => {
  const body = document.querySelector("body");
  const titlecontainer = document.createElement("div");
  titlecontainer.classList.add("title-container", "container");
  const title = document.createElement("h1");
  title.setAttribute("id", "item-a");
  const paragraph = document.createElement("p");
  paragraph.setAttribute("id", "item-b");
  const dateTime = document.createElement("span");
  dateTime.setAttribute("id", "item-c");
  const conditions = document.createElement("p");
  conditions.setAttribute("id", "item-d");
  const icon = document.createElement("img");
  icon.setAttribute("id", "item-e");
  icon.src = `./icons/${objCurrentData.icon}.svg`;

  title.textContent = objCurrentData.location;
  paragraph.textContent = objCurrentData.description;
  dateTime.textContent = objCurrentData.dateTime;
  conditions.textContent = objCurrentData.currentConditions;
  titlecontainer.appendChild(title);
  titlecontainer.appendChild(paragraph);
  titlecontainer.appendChild(dateTime);
  titlecontainer.appendChild(conditions);
  titlecontainer.appendChild(icon);
  body.appendChild(titlecontainer);
};
