function addTodoListItems(){
    const li = document.createElement("li");
    const inputValue = document.getElementById("txtTodoItem").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        if(document.getElementById("todoListItemsUL").children.length<8)
            document.getElementById("todoListItemsUL").appendChild(li);
            const span = document.createElement("SPAN");
            const txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.id="close";
            span.appendChild(txt);
            li.appendChild(span);
    }
    document.getElementById("txtTodoItem").value = "";
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