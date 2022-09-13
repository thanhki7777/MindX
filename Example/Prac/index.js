let addButton = document.getElementById('btn-add');
let todoList = document.getElementById('list-todo');
let toDoEntryBox = document.getElementById('todo-entry-box');

addButton.addEventListener('click',);

function addToDoItem(){
    let itemText = toDoEntryBox.value;
    newToDoItem(itemText,false);
}
function newToDoItem(itemText,completed){
    var listli = document.createElement('li');
    var listtext = document.createTextNode(itemText);
    listli.appendChild(listtext);
    if(completed){
        listli.classList.add("completed");
    }
    todoList.appendChild(listli);

    
}
