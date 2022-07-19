import createForm from "./form.js";
import createCard from "./card.js";

let url = "https://swapi.dev/api/people/.json";
// let url = "https://swapi.dev/api/people/.json?page=9";
const startBtn = document.getElementById("newTeam");
let teamForm = document.querySelector(".teamForm");
const localStorageObject = [];
const characters = [];
const pages = ["","?page=2","?page=3","?page=4","?page=5","?page=6","?page=7",,"?page=8","?page=9"]
let cardId = 1;


const list = {
  // get all of the people information from SWAPI and sort alphabetically.
  fetchUrl(url) {
    pages.map(async page => {
      fetch(`${url}${page}`)
        .then(response => response.json())
        .then(jsObject => {
          for (let i=0; i<10; i++) {
            let name = (jsObject.results[i].name); 
            characters.push(name);
          }
          characters.sort();
        })
    })
  },

  start() {
    // wait until all of the starwars charaters have been loaded.
    if (characters.length < 82) {
      alert("We are still loading Star Wars characters. Please try again in a moment.");
    } else {
      // create and append the form
      teamForm.appendChild(createForm(characters));

      const myForm = document.getElementById(`myForm`);
      const subBtn = document.getElementById("submitBtn");
      const resetBtn = document.getElementById("resetBtn");

      subBtn.addEventListener("click", () => {
        if (document.querySelector("#teamName").value != "" )  {
          const array = list.createNode(); 
          createCard(array, cardId); 
          cardId += 1;
          // const deleteBtn = document.getElementById(`delete${cardId - 1}`);
          // deleteBtn.addEventListener("click", () => {list.removeCard(`card${cardId - 1}`)});
        } else {return}});
      resetBtn.addEventListener("click", () => {myForm.reset();});
      startBtn.remove();
    }

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
