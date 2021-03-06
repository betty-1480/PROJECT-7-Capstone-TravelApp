import {getGridTemplateRows} from "./getGridTemplateRows"
import {setGridTemplateRows} from "./setGridTemplateRows"
//function to remove sections of the webpage upon 'X' button click. Used this in todolist form, flight itinery form ect
function removeTripForm(htmlElement){
    let firstChild = document.getElementById(htmlElement).firstElementChild;
    firstChild.parentElement.removeChild(firstChild);
    let m = getGridTemplateRows()
    //reset the css grid template properties of '.container' emament after deletion of webpage sections
    m.set(htmlElement,'0vh'); 
    setGridTemplateRows();
}

export {removeTripForm}