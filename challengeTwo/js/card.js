import writeToLS from "./ls.js";

const teamsSect = document.querySelector(".teams");

export default function createCard(array, cardId) {
  const button = document.createElement("button");
    button.textContent = "X";
    button.setAttribute("id", `delete${cardId}`);
    button.setAttribute("class", `delete`);
  const h3 = document.createElement("h3");
    h3.textContent = array.teamName;
  const div = document.createElement("div");
    div.setAttribute("id", `card${cardId}`);
    div.setAttribute("class", `card`);
  

  
  const array2 = Object.entries(array);
  const result = array2.filter(([key, value]) => value === true);
  
  div.appendChild(h3);
  div.appendChild(button);
  if (array.teamDesc != "") {
    const p = document.createElement("p");
    p.textContent = array.teamDesc;
    p.setAttribute("class", "description");
    div.appendChild(p);
  } 
  for(let i = 0; i < result.length; i++) {
    let person = result[i][0]; 
    const p = createPeople(person); 
    div.appendChild(p);
  }
  teamsSect.appendChild(div);

  const deleteBtn = document.getElementById(`delete${cardId}`);
  deleteBtn.addEventListener("click", () => {removeCard(`card${cardId}`)});

  const divToText = document.getElementById(`card${cardId}`);
  function htmlToText() {
    const string = divToText.innerHTML;
    return string;
  }

  writeToLS(`card${cardId}`, htmlToText());
};

function createPeople(person) {
  const p = document.createElement("p");
  p.textContent = person;
  
  return p;
};

export function removeCard(id) {
  const idDiv = document.getElementById(id);
  console.log(idDiv);
  idDiv.remove();
  localStorage.removeItem(id);
};

