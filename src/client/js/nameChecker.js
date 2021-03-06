function showResults(result) {
    // pull an image of the trip location from Pixabay API and display
    document.getElementById("tripImg").innerHTML = 
    `<img  src= "${result.previewURL}" alt="mr website" height="250px" width="400px">`;
}


export {showResults }
