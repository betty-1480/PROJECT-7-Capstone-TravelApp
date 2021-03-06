  // pull an image of the trip location from Pixabay API and display
const getPixaby = async(location)=>{
    let formText = location+ " landmark";
   const response = fetch('http://localhost:8081/pixabay', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ formText: formText }),
    }).then(async function(){
        const pixabay = await fetch("http://localhost:8081/all");
        const pixabayData = await pixabay.json();
        Client.showResults(pixabayData);
    });

 }

 export{getPixaby}