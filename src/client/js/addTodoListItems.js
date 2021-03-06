//method to append  list items to the todo list
function addTodoListItems(){
    const li = document.createElement("li");
    const inputValue = document.getElementById("txtTodoItem").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        // limit todo list to 8 items
        if(document.getElementById("todoListItemsUL").children.length<8)
            document.getElementById("todoListItemsUL").appendChild(li);
            //create a 'X' button to detele todo list item
            const span = document.createElement("SPAN");
            const txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.id="close";
            span.appendChild(txt);
            li.appendChild(span);
    }
    document.getElementById("txtTodoItem").value = "";
    //create close button to delete todo list items
    const close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
         const div = this.parentElement;
        div.parentElement.removeChild(div);
    }
};

}

export{addTodoListItems}