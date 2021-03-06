//function to fectch coordinates of a location from Geonames API
const getGeoInfo = async (location) => {
    const response = await fetch(`http://localhost:8081/geo?q=${location}`);
    try {
        const geoInfo = await response.json();
        return geoInfo;
    } catch (error) {
        console.log("error", error);
    }

};
export{getGeoInfo};