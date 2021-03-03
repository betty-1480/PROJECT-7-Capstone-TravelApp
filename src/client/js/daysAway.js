function dateDifference(tripDate){
    const today = Date.now()/1000;
    //const tripDate = new Date(document.getElementById('tripDate').value).getTime()/1000;
    const tripDate1=new Date(tripDate).getTime()/1000;
    return Math.round((tripDate1-today)/ (3600 * 24));
   //return (today - new Date(document.getElementById('tripDate').value)) / (1000 * 3600 * 24);
}

function numberOfDaysAway(tripDate) {
    const numberOfDays=dateDifference(tripDate);
    document.getElementById("daysAway").innerHTML = `is ${numberOfDays} days away`;

    const countDownDate = new Date(tripDate).getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById("buttonSave").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("buttonSave").innerHTML = "";
        }
    }, 1000);
}
export { numberOfDaysAway }