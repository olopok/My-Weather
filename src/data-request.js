import { locationContainer } from "./display-current";

export async function getDefaultWeather() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=uk&elements=datetime%2Ctemp%2Cfeelslike%2Cprecipprob%2Cconditions%2Cdescription%2Cicon&key=MUJK7MQNE52JGF2CJ9SBM2VFH&contentType=json",
      {
        method: "GET",
        headers: {},
      },
    );
    const weatherData = response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

export async function getWeather() {
  const location = document.querySelector("#location").value;
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+`${location}`+"?unitGroup=uk&elements=datetime%2Ctemp%2Cfeelslike%2Cprecipprob%2Cconditions%2Cdescription%2Cicon&key=MUJK7MQNE52JGF2CJ9SBM2VFH&contentType=json",
      {
        method: "GET",
        headers: {},
      },
    );
    const weatherData = response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}
