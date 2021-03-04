
const getPixaby = async(location)=>{
    //let formText = document.getElementById('location').value+ " landmark";
    let formText = location+ " landmark";
   const response = fetch('http://localhost:8080/pixabay', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ formText: formText }),
    }).then(async function(){
        const pixabay = await fetch("http://localhost:8080/all");
        const pixabayData = await pixabay.json();
        Client.showResults(pixabayData);
    });

 }

 export{getPixaby}