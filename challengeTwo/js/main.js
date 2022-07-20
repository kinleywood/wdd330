import createForm from "./form.js";
import createCard from "./card.js";
import { readFromLS } from "./ls.js";

let url = "https://swapi.dev/api/people/.json";
// let url = "https://swapi.dev/api/people/.json?page=9";
const startBtn = document.getElementById("newTeam");
const teamsSect = document.querySelector(".teams");
let teamForm = document.querySelector(".teamForm");
const localStorageObject = [];
const characters = [];
const pages = ["","?page=2","?page=3","?page=4","?page=5","?page=6","?page=7",,"?page=8","?page=9"]
let cardId = 1;
if (localStorage.getItem("NumCard") != null) {
  cardId = localStorage.getItem("NumCard");
} else {
  cardId = 1;
};

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
          this.increaseCardId();
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
    return array;
  },
  
  increaseCardId () {
    cardId = parseInt(cardId) + 1;
    localStorage.setItem("NumCard", cardId);
  }
}

readFromLS();

list.fetchUrl(`${url}`); 

startBtn.addEventListener("click", () => {list.start()});

