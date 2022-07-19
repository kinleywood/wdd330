import writeTimeStamp from "./todos.js";

let url = "https://swapi.dev/api/people/.json";
// let url = "https://swapi.dev/api/people/.json?page=9";
const startBtn = document.getElementById("newTeam");
const teamsSect = document.querySelector(".teams");
let nextUrl = "";
let teamForm = document.querySelector(".teamForm");
const tasksArray = [];
const localStorageObject = [];
const characters = [];
const pages = ["","?page=2","?page=3","?page=4","?page=5","?page=6","?page=7",,"?page=8","?page=9"]
let cardId = 1;


const list = {
  fetchUrl(url) {
    pages.map(async page => {
      fetch(`${url}${page}`)
        .then(response => response.json())
        .then(jsObject => {
          // console.log(jsObject);
          // document.querySelectorAll("div").remove;
          for (let i=0; i<10; i++) {let name = (jsObject.results[i].name); characters.push(name);}
          nextUrl = JSON.stringify(jsObject.next);
          characters.sort();
        })
      })
    },

  start() {
    // if (characters.length < 82) {
    if (characters.length == 0) {
      alert("We are still loading Star Wars characters. Please try again.");
    } else {
      list.appendForm();
      const myForm = document.getElementById(`myForm`);
      const subBtn = document.getElementById("submitBtn");
      subBtn.addEventListener("click", () => {if (document.querySelector("#teamName").value != "") {const array = list.createNode(); this.createCard(array);} else {return}});
      startBtn.remove();
    }

  },

  appendForm() {
    // create elements
    const card = document.createElement("div");
    // const h3 = document.createElement("h3");
    // fill elements
    // h3.textContent = "New Team";
    // append to document
    // card.appendChild(h3);
    card.appendChild(list.createForm());
    teamForm.appendChild(card);
  },

  createForm() {
    const form = document.createElement("form");
      form.setAttribute("action", `card.html`);
      form.setAttribute("method", `POST`);
      form.setAttribute("target", `_blank`);
      form.setAttribute("id", `myForm`);
      form.setAttribute("class", "form");
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
      legend.textContent = "Create Team";
    const titleLabel = document.createElement("label");
      titleLabel.setAttribute("for", "teamName");
      titleLabel.textContent = "Team Name: ";
    const title = document.createElement("input");
      title.setAttribute("type", "text");
      title.setAttribute("id", "teamName");
      title.setAttribute("name", "teamName");
      title.setAttribute("placeholder", "New Team");
      title.setAttribute("required", "true");
    const h4 = document.createElement("h4");
      h4.textContent = "Choose who you want on this team:";
    const textAreaLabel = document.createElement("label");
      textAreaLabel.setAttribute("for", "teamDesc");
    const textArea = document.createElement("textarea");
      textArea.setAttribute("id", "teamDesc");
      textArea.setAttribute("name", "teamDesc");
    const submit = document.createElement("input");
      submit.setAttribute("type", "submit");
      submit.setAttribute("value", "Create New Team");
      submit.setAttribute("id", "submitBtn");

    form.appendChild(fieldset);
    fieldset.appendChild(legend);
    fieldset.appendChild(titleLabel);
    fieldset.appendChild(title);
    fieldset.appendChild(h4);
    for(let i = 0; i < characters.length; i++) {let person = list.createPeopleChecklist(i); let personLabel = list.createPeopleLabel(i); fieldset.appendChild(person); fieldset.appendChild(personLabel);};
    fieldset.appendChild(textArea);
    fieldset.appendChild(submit);

    return form;
  },

  createPeopleChecklist(i) {
    const person = document.createElement("input")
      person.setAttribute("type", "checkbox");
      person.setAttribute("id", characters[i]);
      person.setAttribute("name", characters[i]);
    return person;
    
  },
  createPeopleLabel(i) {
    const personLabel = document.createElement("label");
      personLabel.setAttribute("for", characters[i]);
      personLabel.textContent = characters[i];
    return personLabel;
  },
  createNode() {
    const teamName = document.querySelector("#teamName");
    const teamDesc = document.querySelector("#teamDesc");
    const array = Array.from(document.querySelectorAll("#myForm input[type='checkbox']")).reduce((acc, input) => ({ ...acc, [input.id]: input.checked}), {});
    array[teamName.id] = teamName.value;
    array[teamDesc.id] = teamDesc.value;
    // console.log(array);
    return array;
  },

  createCard(array) {
    const h3 = document.createElement("h3");
      h3.textContent = array.teamName;
    const div = document.createElement("div");
      div.setAttribute("id", `card${cardId}`);
    cardId += 1;

    
    const array2 = Object.entries(array);
    const result = array2.filter(([key, value]) => value === true);
    
    function createPeople(person) {
      const p = document.createElement("p");
      p.textContent = person;
      
      return p;
    };
    
    div.appendChild(h3);
    if (array.teamDesc != "") {
      const p = document.createElement("p");
      p.textContent = array.teamDesc;
      p.setAttribute("class", "description");
      div.appendChild(p);
    } 
    for(let i = 0; i < result.length; i++) {let person = result[i][0]; const p = createPeople(person); div.appendChild(p);};
    teamsSect.appendChild(div);
    
  },
//   // get input from document. If input is blank do nothing; else call the createItem function
//   // set the input value back to nothing. Focus the cursor on the text box.
//   addNewItems() {
//     let newItem = document.getElementById("newItem");                       
//     if (newItem.value === "") {writeToLS();} 
//     else {list.createItem(newItem.value); writeToLS();} 
//     newItem.value = "";                                                    
//     newItem.focus();                                                       
//   },

//   writeTimeStamp() {
//     const timeStamp = JSON.stringify(new Date().getTime());
//     return timeStamp;
//   },

//   // Adds a new Item to the list
//   createItem(item) {
//     // create a div, input, label, and button to append to the document.
//     const div = document.createElement("div");
//     const taskCheck = document.createElement("input");
//     const task = document.createElement("label");
//     const removeItem = document.createElement("button");

//     // Set the attributes and text content of each element.
//     div.setAttribute("class", `${item}Div div`)
//     taskCheck.setAttribute("type", "checkbox");
//     taskCheck.setAttribute("name", item);
//     taskCheck.setAttribute("id", item);
//     task.setAttribute("for", item);
//     task.textContent = item;
//     removeItem.textContent = "X";
//     removeItem.setAttribute("class", `remove ${item}`);
  
//     // append input, label, and button to the div.
//     div.appendChild(taskCheck);
//     div.appendChild(task);
//     div.appendChild(removeItem);
//     // append the div to the todolist on the document
//     todoList.appendChild(div);

//     // add an event listener to the x button that calls the removeItem function
//     taskCheck.addEventListener("click", () => list.taskCheck(item));
//     removeItem.addEventListener("click", () => list.removeItem(`${item}Div`, item));
//     // add the items class name to an array.
//     tasksArray.push(`${item}Div`);

//     const timeStamp = list.writeTimeStamp(); 
//     localStorageObject.push({"id": timeStamp, "content": item, "completed": false});
//     this.filter();
//   },

//   taskCheck(item) {
//     const id = document.getElementById(item);
//     const index = localStorageObject.findIndex(object => {
//       return object.content === item;
//     });
//     if (id.checked === false) {      
//       localStorageObject[index].completed = false;
//     } else {
//       localStorageObject[index].completed = true;
//     }
//     writeToLS();
//     this.filter();
//   },

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

//   filter() {
//     if (completeBtn.classList.contains("active")){this.filterComplete();}
//     else if (incompleteBtn.classList.contains("active")){this.filterIncomplete();}
//     else {this.filterAll();}
//   },

//   // Filters list to show all tasks
//   filterAll(){
//     // set the total tasks to zero
//     let total = 0;     
//     // add and remove the "active" class list from the appropriate buttons
//     allBtn.classList.add("active");
//     incompleteBtn.classList.remove("active");
//     completeBtn.classList.remove("active");
//     // filter throught each task in the tasks array and remove the "hide" class from each
//     tasksArray.forEach(task => {
//       const divElement = document.querySelector(`.${task}`);
//       const divInput = divElement.querySelector("input");
//       divElement.classList.remove("hide");
//       // count the number on incomplete tasks
//       if (divInput.checked === false) {
//         total += 1;
//       }
//       });
//     // display the number of incomplete tasks
//     if (total == 1) {
//       tasksLeft.textContent = `${total} task left`;
//     } else {
//       tasksLeft.textContent = `${total} tasks left`;
//     }
//   },

//   // Filters list to only show incompleted tasks
//   filterIncomplete(){
//     // set the total tasks to zero
//     let total = 0;
//     // add and remove the "active" class list from the appropriate buttons
//     allBtn.classList.remove("active");
//     incompleteBtn.classList.add("active");
//     completeBtn.classList.remove("active");
//     // filter throught each task in the tasks array to add and remove the "hide" class from approptiate tasks
//     tasksArray.forEach(task => {
//       const divElement = document.querySelector(`.${task}`);
//       const divInput = divElement.querySelector("input");
//       if (divInput.checked) {
//         divElement.classList.add("hide");
//       }
//       else {
//         divElement.classList.remove("hide");
//         total += 1;
//       }
//     });
//     // display the number of incomplete tasks
//     if (total == 1) {
//       tasksLeft.textContent = `${total} task left`;
//     } else {
//       tasksLeft.textContent = `${total} tasks left`;
//     }
//   },

//   // Filters list to only show completed tasks
//   filterComplete(){
//     // set the total tasks to zero
//     let total = 0;
//     // add and remove the "active" class list from the appropriate buttons
//     allBtn.classList.remove("active");
//     incompleteBtn.classList.remove("active");
//     completeBtn.classList.add("active");
//     // filter throught each task in the tasks array to add and remove the "hide" class from approptiate tasks
//     tasksArray.forEach(task => {
//       const divElement = document.querySelector(`.${task}`);
//       const divInput = divElement.querySelector("input");
//       if (divInput.checked) {
//         divElement.classList.remove("hide");
//         total += 1;
//       }
//       else {
//         divElement.classList.add("hide");
//       }
//     });
//     // display the number of incomplete tasks
//     if (total == 1) {
//       tasksLeft.textContent = `${total} task completed`;
//     } else {
//       tasksLeft.textContent = `${total} tasks completed`;
//     }
//   }
}
list.fetchUrl(`${url}`); 
// list.fetchUrl(nextUrl);

function test() {
  console.log(
    "it works"
  )
}
// function writeToLS() { 
//   window.localStorage.clear();
//   window.localStorage.setItem("todo", JSON.stringify(localStorageObject));
// }



startBtn.addEventListener("click", () => {list.start()});

// addNewItem.addEventListener("click", list.addNewItems);
// allBtn.addEventListener("click", list.filterAll);
// incompleteBtn.addEventListener("click", list.filterIncomplete);
// completeBtn.addEventListener("click", list.filterComplete);
