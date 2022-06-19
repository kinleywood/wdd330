const url = "https://swapi.dev/api/people/"
const section = document.querySelector(".data");
const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".previous");
let nextUrl = "";
let previousUrl = "";

const APP = {
  displayData(name) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");

    console.log(name);
    
    h2.textContent = name;
    div.appendChild(h2);
    section.appendChild(div);
  },
  displayButtons() {
    if (nextUrl == 'null' || '') {
      nextBtn.classList.add("hide");
      backBtn.classList.remove("hide");
    }
    if (previousUrl == 'null' || '') {
      backBtn.classList.add("hide");
      nextBtn.classList.remove("hide");
    }
  },
  addBackBtn() {
    console.log("back");
  },
  addNextBtn() {
  // get next URL to work!!!!!!
    this.fetchUrl(nextUrl);
    console.log(nextUrl);
  },
  fetchUrl(url) {
    fetch(`${url}.json`)
      .then(response => response.json())
      .then(jsObject => {
        console.log(jsObject);
        document.querySelectorAll("div").remove;
        for (let i=0; i<10; i++) {let name = jsObject.results[i].name; APP.displayData(name);}
        nextUrl = JSON.stringify(jsObject.next);
        previousUrl = JSON.stringify(jsObject.previous);
        APP.displayButtons();
      });
  }
}

APP.fetchUrl(url);


  backBtn.addEventListener("click", () => {
    APP.addBackBtn();
  });
  nextBtn.addEventListener("click", () => {
    APP.addNextBtn();
  });