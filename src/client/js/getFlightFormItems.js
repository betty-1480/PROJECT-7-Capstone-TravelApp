function getFlightFormItems(){
    const flightFormItems = {
        departure : document.getElementById('txtDeparture').value,
        departureDate : document.getElementById('txtDepartureDate').value,
        departureHr : document.getElementById('txtDepartureHr').value,
        departureGate : document.getElementById('txtDepartureGate').value,
        departureFlightNo : document.getElementById('txtDepartureFlightNo').value,
        departureConfirmationNo : document.getElementById('txtDepartureConfirmationNo').value,
        departureAircraft : document.getElementById('txtDepartureAircraft').value,
        departureClass : document.getElementById('txtDepartureClass').value,
        seatStatus : document.getElementById('txtSeatStatus').value,
        arrival : document.getElementById('txtArrival').value,
        arrivalDate : document.getElementById('txtArrivalDate').value,
        arrivalDateHr : document.getElementById('txtArrivalDateHr').value,
        arrivalDateMin : document.getElementById('txtArrivalDateMin').value
    };
    return flightFormItems;
}

export{getFlightFormItems}