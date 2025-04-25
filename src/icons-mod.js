import clearday from "./icons/clear-day.svg";
import clearnight from "./icons/clear-night.svg";
import cloudy from "./icons/cloudy.svg";
import fog from "./icons/fog.svg";
import partlycloudyday from "./icons/partly-cloudy-day.svg";
import hail from "./icons/hail.svg";
import partlycloudynight from "./icons/partly-cloudy-night.svg";
import rainsnowshowersday from "./icons/rain-snow-showers-day.svg";
import rainsnowshowersnight from "./icons/rain-snow-showers-night.svg";
import rainSnow from "./icons/rain-snow.svg";
import rain from "./icons/rain.svg";
import showersDay from "./icons/showers-day.svg";
import showersNight from "./icons/showers-night.svg";
import sleet from "./icons/sleet.svg";
import snowShowersDay from "./icons/snow-showers-day.svg";
import snowShowersNight from "./icons/snow-showers-night.svg";
import snow from "./icons/snow.svg";
import thunderRain from "./icons/thunder-rain.svg";
import thunderShowersDay from "./icons/thunder-showers-day.svg";
import thunderShowersNight from "./icons/thunder-showers-night.svg";
import thunder from "./icons/thunder.svg";
import wind from "./icons/wind.svg";

export const icons = {
  clearday: clearday,
  clearnight: clearnight,
  cloudy: cloudy,
  fog: fog,
  partlycloudyday: partlycloudyday,
  hail: hail,
  partlycloudynight: partlycloudynight,
  rainsnowshowersday: rainsnowshowersday,
  rainsnowshowersnight: rainsnowshowersnight,
  rainSnow: rainSnow,
  rain: rain,
  showersDay: showersDay,
  showersNight: showersNight,
  sleet: sleet,
  snowShowersDay: snowShowersDay,
  snowShowersNight: snowShowersNight,
  snow: snow,
  thunderRain: thunderRain,
  thunderShowersDay: thunderShowersDay,
  thunderShowersNight: thunderShowersNight,
  thunder: thunder,
  wind: wind,
};
export function iconsName(x) {
  x = x.replace(/-/g, "");
  console.log(x);
  return x;
}
