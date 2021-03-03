import {getWeatherData} from "./weatherData"
import {numberOfDaysAway} from "./daysAway"
import {getPixaby} from "./getPixaby"
const updateUI = async()=>{

    var query = window.location.search.substring(1);
    var Field=query.split("=");
    const subField=Field[1].split("&");
    //const tripDate=Field[3]//document.getElementById('tripDate').value;
    const location=subField[0];
    const tripDate = Field[2];
    //The countdown
    document.getElementById("tripTo").innerHTML=`Trip to ${location}`;
    document.getElementById("flightInfo").innerHTML=`Departing on ${tripDate}`;
    getWeatherData()
    .then(numberOfDaysAway(tripDate))
    .then(getPixaby(location))
}

export{updateUI}
