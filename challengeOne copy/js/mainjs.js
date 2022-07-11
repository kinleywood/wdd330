import writeTimeStamp from "./todos.js";

const addNewItem = document.getElementById("addNewItem");
const body = document.querySelector("body");
const tasksLeft = document.getElementById("totalTasks");
const allBtn = document.getElementById("all");
const incompleteBtn = document.getElementById("incomplete");
const completeBtn = document.getElementById("complete");
const tasksArray = [];
const localStorageObject = [];

const list = {
  // get input from document. If input is blank do nothing; else call the createItem function
  // set the input value back to nothing. Focus the cursor on the text box.
  addNewItems() {
    let newItem = document.getElementById("newItem");                       
    if (newItem.value === "") {writeToLS();} 
    else {list.createItem(newItem.value); writeToLS();} 
    newItem.value = "";                                                    
    newItem.focus();                                                       
  },

  writeTimeStamp() {
    const timeStamp = JSON.stringify(new Date().getTime());
    return timeStamp;
  },

  // Adds a new Item to the list
  createItem(item) {
    // create a div, input, label, and button to append to the document.
    const container = document.createElement("div");
    const div = document.createElement("div");
    const taskCheck = document.createElement("input");
    const task = document.createElement("label");
    const removeItem = document.createElement("button");
    

    // Set the attributes and text content of each element.
    container.setAttribute("class", "container")
    div.setAttribute("class", `${item}Div div`)
    taskCheck.setAttribute("type", "checkbox");
    taskCheck.setAttribute("name", item);
    taskCheck.setAttribute("id", item);
    task.setAttribute("for", item);
    task.textContent = item;
    removeItem.textContent = "X";
    removeItem.setAttribute("class", `remove ${item}`);
  
    // append input, label, and button to the div.
    div.appendChild(taskCheck);
    div.appendChild(task);
    div.appendChild(removeItem);
    container.appendChild(div);
    // append the div to the body on the document
    body.appendChild(container);

    // add an event listener to the x button that calls the removeItem function
    taskCheck.addEventListener("click", () => list.taskCheck(item));
    removeItem.addEventListener("click", () => list.removeItem(`${item}Div`, item));
    // add the items class name to an array.
    tasksArray.push(`${item}Div`);

    const timeStamp = list.writeTimeStamp(); 
    localStorageObject.push({"id": timeStamp, "content": item, "completed": false});
    this.filter();
  },

  taskCheck(item) {
    const id = document.getElementById(item);
    const index = localStorageObject.findIndex(object => {
      return object.content === item;
    });
    if (id.checked === false) {      
      localStorageObject[index].completed = false;
    } else {
      localStorageObject[index].completed = true;
    }
    writeToLS();
    this.filter();
  },

  // Removes Item from list
  removeItem(div, item) {
    const itemDiv = document.querySelector(`.${div}`);
    const index = tasksArray.findIndex(object => {
      return object == div;
    });
    console.log(index);
    const lsindex = localStorageObject.findIndex(object => {
      return object.content === item;
    });
    itemDiv.remove();                     // removes entire div
    tasksArray.splice(index, 1); // removes the class name from the tasksArray array
    localStorageObject.splice(lsindex, 1);
    console.log(tasksArray);
    writeToLS();
    this.filter();
  },

  filter() {
    if (completeBtn.classList.contains("active")){this.filterComplete();}
    else if (incompleteBtn.classList.contains("active")){this.filterIncomplete();}
    else {this.filterAll();}
  },

  // Filters list to show all tasks
  filterAll(){
    // set the total tasks to zero
    let total = 0;     
    // add and remove the "active" class list from the appropriate buttons
    allBtn.classList.add("active");
    incompleteBtn.classList.remove("active");
    completeBtn.classList.remove("active");
    // filter throught each task in the tasks array and remove the "hide" class from each
    tasksArray.forEach(task => {
      const divElement = document.querySelector(`.${task}`);
      const divInput = divElement.querySelector("input");
      divElement.classList.remove("hide");
      // count the number on incomplete tasks
      if (divInput.checked === false) {
        total += 1;
      }
      });
    // display the number of incomplete tasks
    if (total == 1) {
      tasksLeft.textContent = `${total} task left`;
    } else {
      tasksLeft.textContent = `${total} tasks left`;
    }
  },

  // Filters list to only show incompleted tasks
  filterIncomplete(){
    // set the total tasks to zero
    let total = 0;
    // add and remove the "active" class list from the appropriate buttons
    allBtn.classList.remove("active");
    incompleteBtn.classList.add("active");
    completeBtn.classList.remove("active");
    // filter throught each task in the tasks array to add and remove the "hide" class from approptiate tasks
    tasksArray.forEach(task => {
      const divElement = document.querySelector(`.${task}`);
      const divInput = divElement.querySelector("input");
      if (divInput.checked) {
        divElement.classList.add("hide");
      }
      else {
        divElement.classList.remove("hide");
        total += 1;
      }
    });
    // display the number of incomplete tasks
    if (total == 1) {
      tasksLeft.textContent = `${total} task left`;
    } else {
      tasksLeft.textContent = `${total} tasks left`;
    }
  },

  // Filters list to only show completed tasks
  filterComplete(){
    // set the total tasks to zero
    let total = 0;
    // add and remove the "active" class list from the appropriate buttons
    allBtn.classList.remove("active");
    incompleteBtn.classList.remove("active");
    completeBtn.classList.add("active");
    // filter throught each task in the tasks array to add and remove the "hide" class from approptiate tasks
    tasksArray.forEach(task => {
      const divElement = document.querySelector(`.${task}`);
      const divInput = divElement.querySelector("input");
      if (divInput.checked) {
        divElement.classList.remove("hide");
        total += 1;
      }
      else {
        divElement.classList.add("hide");
      }
    });
    // display the number of incomplete tasks
    if (total == 1) {
      tasksLeft.textContent = `${total} task completed`;
    } else {
      tasksLeft.textContent = `${total} tasks completed`;
    }
  }
}

function writeToLS() { 
  window.localStorage.clear();
  window.localStorage.setItem("todo", JSON.stringify(localStorageObject));
}




addNewItem.addEventListener("click", list.addNewItems);
allBtn.addEventListener("click", list.filterAll);
incompleteBtn.addEventListener("click", list.filterIncomplete);
completeBtn.addEventListener("click", list.filterComplete);
