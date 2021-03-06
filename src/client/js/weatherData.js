import {getGeoInfo} from "./getGeoInfo"

//take coordinates of the location from Geonames API pass it on to Weatherbit API and display on the webpage
const getWeatherData=async()=>{
   //Get coordinates of the location from Geonames API
   getGeoInfo()
   .then(async (geoInfo) => {
      //extract coordinates from Geonames API call
      const latitude = geoInfo.geonames[0].lat;
      const longitude = geoInfo.geonames[0].lng;
      const country = geoInfo.geonames[0].countryName;
      //featch WeatherBit API data
      const response=await fetch(`http://localhost:8081/weather?latitude=${latitude}&longitude=${longitude}`);
      try {
        const weatherInfo = await response.json();
        const weather=weatherInfo.data[0].high_temp;
        //display weather on the webpage
        document.getElementById("weather").innerHTML=`Current weather is ${weather}&#8451`;

     } catch (error) {
        console.log("error", error);
    }
     });
}

export{getWeatherData}
