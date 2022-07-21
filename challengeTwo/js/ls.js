import { removeCard } from "./card.js";

const teamsSect = document.querySelector(".teams");


// the key is the name, data is an object that needs to use JSON.stringify() to set and JSON.parse() to get.
export default function writeToLS(key, data) { 
  window.localStorage.setItem(key, data);
}

export function readFromLS() {
  const keys = Object.keys(localStorage);
  for (let key of keys) {
    const value = `${localStorage.getItem(key)}`;
    if (key.substring(0,4) == "card") { 
      const div = document.createElement("div");
      div.setAttribute("id", key);
      div.setAttribute("class", "card");
      div.innerHTML = value;
      teamsSect.appendChild(div);

      const card = document.getElementById(`delete${key.substring(4)}`);
      console.log(`this is a card ${key.substring(4)}`);
      card.addEventListener("click", () => {removeCard(key)});
     }
  }}