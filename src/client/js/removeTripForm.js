import {getGridTemplateRows} from "./getGridTemplateRows"
import {setGridTemplateRows} from "./setGridTemplateRows"

function removeTripForm(htmlElement){
    let firstChild = document.getElementById(htmlElement).firstElementChild;
    firstChild.parentElement.removeChild(firstChild);
    let m = getGridTemplateRows()
    m.set(htmlElement,'0vh'); 
    setGridTemplateRows();
}

export {removeTripForm}