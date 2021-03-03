function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}
function showResults(result) {
    // selecting the result container from DOM
    //document.getElementById("chapterBox").style.gridTemplateRows="65vh";
    document.getElementById("tripImg").innerHTML = 
    `<img  src= "${result.previewURL}" alt="mr website" height="250px" width="400px">`;
}


export { checkForName,
    showResults }
