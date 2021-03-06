/*method to get css properties programatically of '.container' element 
when flight itinerary or todo list options are selected*/
let gridTemplateRows = new Map([
    ['H', '15vh'],
    ['myTrip', '50vh'],
    ['addFlightForm', '0vh'],
    ['addTodoList', '0vh'],
    ['F', '15vh'],
]);

function getGridTemplateRows(){
    return gridTemplateRows;
}

export {getGridTemplateRows}