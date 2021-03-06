import {getFlightFormItems} from "./getFlightFormItems"
//display the flight itinerary in the tabular format
function addItineraryTable(){
  const flightFormItems = getFlightFormItems();
      flightForm.parentElement.removeChild(flightForm);
    document.getElementById("addFlightForm").innerHTML =`
    <div class="itineraryTable">
    <div class="closeButton">
    <span class ="u00D7" style="font-size: 25px;" onclick="return Client.removeTripForm('addFlightForm')">\u00D7</span>
    </div>
  <table  style="width:100%">
    <tr>
      <th Colspan = "4" align = "center"><h1>Travel Itinerary</h1></th>
    </tr>
    <tr align="left">
      <th>Flight No</th>
      <th>Departure</th>
      <th>Departure Date</th> 
    </tr>
    <tr align="left">
      <td>${flightFormItems.departureFlightNo}</td>
      <td>${flightFormItems.departure}</td>
      <td>${flightFormItems.departureDate}</td>
    </tr>
    <tr></tr>
    <tr align="left">
      <th>Class</th>
      <th>Arrival</th>
      <th>Arrival Date</th> 
    </tr>    
    <tr align="left">
    <td>${flightFormItems.departureClass}</td>
    <td>${flightFormItems.arrival}</td>
    <td>${flightFormItems.arrivalDate}</td>
  </tr>
  <tr></tr>
    <tr align="left">
      <th>Status</th>
      <th>Gate</th>
      <th>Aircraft</th> 
      <th>Confirmation No</th> 
    </tr>    
    <tr align="left">
    <td>${flightFormItems.seatStatus}</td>
    <td>${flightFormItems.departureAircraft}</td>
    <td>${flightFormItems.departureConfirmationNo}</td>
    <td></td>
  </tr>
</table>
</div>
`;
}

export{addItineraryTable}