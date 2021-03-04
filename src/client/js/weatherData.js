import {getGeoInfo} from "./getGeoInfo"

const getWeatherData=async()=>{
   getGeoInfo()
   .then(async (geoInfo) => {
      const latitude = geoInfo.geonames[0].lat;
      const longitude = geoInfo.geonames[0].lng;
      const country = geoInfo.geonames[0].countryName;
      const response=await fetch(`http://localhost:8080/weather?latitude=${latitude}&longitude=${longitude}`);
      try {
        const weatherInfo = await response.json();
        const weather=weatherInfo.data[0].high_temp;
        document.getElementById("weather").innerHTML=`Current weather is ${weather}&#8451`;

     } catch (error) {
        console.log("error", error);
    }
     });
}

export{getWeatherData}
