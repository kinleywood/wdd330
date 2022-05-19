const addNewItem = document.getElementById("addNewItem");
const todoList = document.getElementById("todoList");

const list = {
  // Decides if a new item should be added list if the text box is not empty.
  addNewItems() {
    let newItem = document.getElementById("newItem");
    if (newItem.value === "") {return;}
    else {list.createItem(newItem.value); };
    newItem.value = "";
  },
  // Adds a new Item to the list
  createItem(item) {
    const div = document.createElement("div");
    const taskCheck = document.createElement("input");
    const task = document.createElement("label");
    const removeItem = document.createElement("button");

    div.setAttribute("class", `${item}Div`)
    taskCheck.setAttribute("type", "checkbox");
    taskCheck.setAttribute("name", item);
    taskCheck.setAttribute("id", item);
    task.setAttribute("for", item);
    task.textContent = item;
    removeItem.textContent = "X";
    removeItem.setAttribute("class", `remove ${item}`);
  
    div.appendChild(taskCheck);
    div.appendChild(task);
    div.appendChild(removeItem);
    todoList.appendChild(div);

    removeItem.addEventListener("click", () => list.removeItem(document.querySelector(`.${item}Div`)));
  },
  removeItem(div) {
    console.log(div);
    div.remove();
  }
}



addNewItem.addEventListener("click", list.addNewItems);