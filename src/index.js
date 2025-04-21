import "../css/style.css";
import "../css/toggle-button.css";
import { getDefaultWeather, getWeather } from "./data-request";
import { locationContainer } from "./display-current";

getDefaultWeather().then(locationContainer());
