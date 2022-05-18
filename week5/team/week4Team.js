const view = {
    a1: document.getElementById("a-1"),
    a2: document.getElementById("a-2"),
    a3: document.getElementById("a-3"),
    b1: document.getElementById("b-1"),
    b2: document.getElementById("b-2"),
    b3: document.getElementById("b-3"),
    c1: document.getElementById("c-1"),
    c2: document.getElementById("c-2"),
    c3: document.getElementById("c-3"),
    start: document.getElementById("start"),
    reset: document.getElementById("reset"),

    setup () {

        this.a1.innerHTML = "";
        this.a2.innerHTML = "";
        this.a3.innerHTML = "";
        this.b1.innerHTML = "";
        this.b2.innerHTML = "";
        this.b3.innerHTML = "";
        this.c1.innerHTML = "";
        this.c2.innerHTML = "";
        this.c3.innerHTML = "";
    }
}

const game = {
    p1: document.getElementById("player-1"),
    p2: document.getElementById("player-2"),
    button1: document.getElementById("start"),    
    div: document.querySelector('div'),

    start () {
        
    },

    writeIn (target) {
        if (this.turn === 1) {
            target.innerHTML = "X";
        }
        else {
            target.innerHTML = "O";
        }
        this.turnOver();
    },

  }

view.start.addEventListener('click', () => game.start, false);

//Placing X || O
function place(div, turn, p1, p2){
  const p = document.createElement('p');

  if (turn === p1){
    p.textContent = 'X';
  }
  else if (turn === p2){
    p.textContent = 'O';
  }
  div.target.append(p);
}
    view.reset.addEventListener("click", () => view.setup(), false);
window.onload = function () {
    view.start.addEventListener('click', () => game.start(), false);
    view.a1.addEventListener("touchend", () => game.writeIn("a1"), false);
    view.a1.addEventListener("click", () => game.writeIn("a1"), false);
}//Border Change
if (game.p1 === 'turn'){
  p1.classList.add('active');
  p2.removeAttribute('.active');
}
else if (p2 === 'turn'){
  p2.classList.add('active');
  p1.removeAttribute('.active');
}