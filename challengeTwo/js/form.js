export default function createForm(characters) {
  // Create Elements
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
  const resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "button");
    resetBtn.textContent = "Reset Form";
    resetBtn.setAttribute("id", "resetBtn");
  const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Create New Team");
    submit.setAttribute("id", "submitBtn");

  // Append elements
  form.appendChild(fieldset);
  fieldset.appendChild(legend);
  fieldset.appendChild(titleLabel);
  fieldset.appendChild(title);
  fieldset.appendChild(h4);
  for(let i = 0; i < characters.length; i++) {
    let person = createPeopleChecklist(characters, i); 
    let personLabel = createPeopleLabel(characters, i); 
    fieldset.appendChild(person); 
    fieldset.appendChild(personLabel);
  };
  fieldset.appendChild(textArea);
  fieldset.appendChild(resetBtn);
  fieldset.appendChild(submit);

  return form;
}

function createPeopleChecklist(characters, i) {
  const person = document.createElement("input")
    person.setAttribute("type", "checkbox");
    person.setAttribute("id", characters[i]);
    person.setAttribute("name", characters[i]);
  return person;
  
}

function createPeopleLabel(characters, i) {
  const personLabel = document.createElement("label");
    personLabel.setAttribute("for", characters[i]);
    personLabel.textContent = characters[i];
  return personLabel;
}