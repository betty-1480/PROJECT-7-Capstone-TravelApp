import {getWeatherData} from "./weatherData"
import {numberOfDaysAway} from "./daysAway"
import {getPixaby} from "./getPixaby"
const updateUI = async()=>{
    //get location and departure date from index.html extarct them out and display
    var query = window.location.search.substring(1);
    var Field=query.split("=");
    const subField=Field[1].split("&");
    const location=subField[0];
    const tripDate = Field[2];
    //display location and departure date on the webpage
    document.getElementById("tripTo").innerHTML=`Trip to ${location}`;
    document.getElementById("flightInfo").innerHTML=`Departing on ${tripDate}`;
    //get weather data from WeatherBit API and display on the webpage
    getWeatherData()
    // calculate number of days to start the trip and a countdown
    .then(numberOfDaysAway(tripDate))
    //dispaly an image of the trip location 
    .then(getPixaby(location))
}

export{updateUI}
