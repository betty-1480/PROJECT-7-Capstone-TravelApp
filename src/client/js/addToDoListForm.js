import {getGridTemplateRows} from "./getGridTemplateRows"
import {setGridTemplateRows} from "./setGridTemplateRows"
import {addTodoListItems} from "./addTodoListItems"
function addToDoListForm(){
  document.getElementById("addTodoList").innerHTML = 
  `<div class="todoForm" id="todoForm">
    <div class="closeButton">
      <span class ="u00D7" style="font-size: 25px;" onclick="return Client.removeTripForm('addTodoList')">\u00D7</span>
    </div>
    <div class="todo">
      <h1>ToDo List</h1>
    </div>
    <div class="todo todoInput">
      <input type="text" id = "txtTodoItem" placeholder="Enter next todo item here...">
      <span class ="u002B" style="font-size: 20px;" onclick="return Client.addTodoListItems()">\u002B</span>
    </div>
    <div id = "todoListItems">
      <ul id = "todoListItemsUL"> </ul>
    </div>
  </div>`;
  let m = getGridTemplateRows()
  m.set('addTodoList','45vh'); 
  setGridTemplateRows();

}

export{addToDoListForm}