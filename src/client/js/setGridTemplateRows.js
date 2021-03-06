import {getGridTemplateRows} from "./getGridTemplateRows"
/*method to set css properties programatically of '.container' element 
when 'flight itinerary' or 'todo list' options are selected*/
function setGridTemplateRows(){
  let rows="";
  let areas="";
  let m = getGridTemplateRows()
  for (let value of m.values()){
      rows=rows+" "+value;
  }
  for (let key of m.keys()){
    areas=areas+" "+ `"${key}"`;
}
    document.getElementById("container").style.gridTemplateRows=rows;
    document.getElementById("container").style.gridGap=`20px`;
    document.getElementById("container").style.gridTemplateAreas=areas;
    
}

export{setGridTemplateRows}