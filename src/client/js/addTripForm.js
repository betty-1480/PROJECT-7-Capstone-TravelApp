function addTripForm(){


    document.getElementById("container").style.gridTemplateRows=`15vh 
    45vh 
    48vh 
    15vh`;
    document.getElementById("container").style.gridTemplateAreas=`"H"
    "myTrip"
    "flightInfo"
    "F"`;

    document.getElementById("addTrip").innerHTML = 
    `<div id="addTripForm">
        <label for="location">My Trip to:</label>
        <input type="text" id="location" placeholder="Enter location here">
        <div >
            <label for="departing">Departing:</label>
            <input type="date" id="tripDate" name="tripDate" required>
        </div>
        <input type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)">
    </div>`;

    document.getElementById("addTrip").style.gridArea="flightInfo";
    document.getElementById("addTrip").style.border=`.25rem solid lightgrey` ;
    
}

export {addTripForm}