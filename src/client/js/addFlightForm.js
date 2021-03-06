import {getGridTemplateRows} from "./getGridTemplateRows"
import {setGridTemplateRows} from "./setGridTemplateRows"
//display a flight itinerary form when click the 'Add Flight Itinerary' button
function addFlightForm(){
    document.getElementById("addFlightForm").innerHTML = `
    <div id="flightForm" class="flightForm">
    <div class="closeButton flightFormItem">
        <span class ="u00D7" style="font-size: 25px;" onclick="return Client.removeTripForm('addFlightForm')">\u00D7</span>
    </div>
    <div class="itinerary flightFormItem">
        <h1>Travel Itinerary</h1>
    </div>
    <div class="departure flightFormItem">
        <input type="text" id = "txtDeparture" placeholder="Departure">
        <input type="date" id = "txtDepartureDate" name="departureDate" required>
        <label for="hr" id = "txtDepartureHr">Hour</label>
        <label for="min" id = "txtDepartureMin">Minute</label>
    </div>
    <div class="gate flightFormItem">
        <input type="text" id = "txtDepartureGate" placeholder="Gate">
        <input type="text" id = "txtDepartureFlightNo" placeholder="Flight No">
        <input type="text" id = "txtDepartureConfirmationNo" placeholder="Confirmation No">
    </div>
    <div class="aircraft flightFormItem">
        <input type="text"  id = "txtDepartureAircraft"  placeholder="Aircraft">
        <input type="text"  id = "txtDepartureClass"  placeholder="Class">
        <input type="text"  id = "txtSeatStatus" placeholder="Seat Status">
    </div>
    <div class="arrival flightFormItem">
        <input type="text" id = "txtArrival" placeholder="Arrival">
        <input type="date" id = "txtArrivalDate" name="arrivalDate" required>
        <label for="hr" id = "txtArrivalDateHr">Hour</label>
        <label for="min" id = "txtArrivalDateMin">Minute</label>
    </div>
    <div class="submitItinerary flightFormItem">
        <input type="submit" name="" value="submit" onclick="return Client.addItineraryTable()">
    </div>
    </div>
    `;

    let m = getGridTemplateRows()
    m.set('addFlightForm','45vh'); 
    setGridTemplateRows();
    }
    

export {addFlightForm}