
const getGeoInfo = async (location) => {
    //location=document.getElementById('location').value;
    const response = await fetch(`http://localhost:8080/geo?q=${location}`);
    try {
        const geoInfo = await response.json();
        return geoInfo;
    } catch (error) {
        console.log("error", error);
    }

};
export{getGeoInfo};