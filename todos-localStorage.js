const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("todoList")

// retrieve from local storage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i =0; i < savedTodos.length; I++) {
    let newTodo = document.createElement("li");
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
        newTodo.style.textDecoration = "line-through";
    }
    todoList.appendChild(newTodo);
}

todoForm.addEventListener("click", function(event) {
    let clickedListItem = event.target;

    if (!clickedListItem.isCompleted) {    
        clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true; 
    } else {
        clickedListItem.style.textDecoration = "none";
        clickedListItem.isCompleted = false;
    }

    // breaks for duplicates - another option is to have dynamic IDs
    for (let i = 0; i < savedTodos.length; i++) {
        if (savedTodos[i].task === clickedListItem.innerText) {
            savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
            localStorage.setItem("todos", JSON.stringify(savedTodos));
        }
    }
});