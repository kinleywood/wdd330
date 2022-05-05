const singleNum = document.querySelector("#singleNumInput");
const addSingleNumBtn = document.querySelector("#addSingleNum");
const addNum1 = document.querySelector("#addNum1");
const addNum2 = document.querySelector("#addNum2");
const sumBtn = document.querySelector("#sum");
const multiplyNum1 = document.querySelector("#multiplyNum1")
const multiplyNum2 = document.querySelector("#multiplyNum2")
const multiplyBtn = document.querySelector("#multiply")
const divNum1 = document.querySelector("#divNum1"); 
const divNum2 = document.querySelector("#divNum2");
const divBtn = document.querySelector("#div")
const div = document.querySelector("#output");

// If user input is 5 it will add 1+2+3+4+5 = 15
function sumSingleNum(singleNumInput){
  if (isNaN(parseFloat(singleNumInput.value)) || parseFloat(singleNumInput.value) < 1) {
    div.textContent = "Please enter a number greater than 0.";
  } else {
    let total = calculateSum(parseFloat(singleNumInput.value));
    div.textContent = `If you add all the numbers from 1 to ${singleNumInput.value} you get ${total}`;
  }
}
// Adds two numbers together Using function declaration
function add(addNum1, addNum2) {
  if (isNaN(parseFloat(addNum1.value)) && isNaN(parseFloat(addNum1.value))) {
    div.textContent = "Please enter a number.";
  } else {
    let total = parseFloat(addNum1.value) + parseFloat(addNum2.value);
    div.textContent = `${addNum1.value} + ${addNum2.value} = ${total}`;
  }
}
// Multiplies two numbers together using function expression
const multiply = function(multiplyNum1, multiplyNum2) {
  if (isNaN(parseFloat(multiplyNum1.value)) || isNaN(parseFloat(multiplyNum2.value))) {
    div.textContent = "Please enter a number.";
  } else {
    let total = parseFloat(multiplyNum1.value) * parseFloat(multiplyNum2.value);
    div.textContent = `${multiplyNum1.value} * ${multiplyNum2.value} = ${total}`;
  }
}
// Divides two numbers together using an arrow function
divide = (x,y) => {
  if (isNaN(parseFloat(x.value)) || isNaN(parseFloat(y.value))) {
    div.textContent = "Please enter a number.";
  } else {
    let total = parseFloat(x.value) / parseFloat(y.value);
    div.textContent = `${x.value} / ${y.value} = ${total}`;
  }
}
function calculateSum(n) {
  let x = 0;
  let y = 0;
  while (y <= n) {
    x += y;
    y += 1;
  } 
  return x;
}

      
      
addSingleNumBtn.addEventListener("click", () => {sumSingleNum(singleNumInput)});
sumBtn.addEventListener("click", () => {add(addNum1, addNum2)});
multiplyBtn.addEventListener("click", () => {multiply(multiplyNum1, multiplyNum2)});
divBtn.addEventListener("click", () => {divide(divNum1, divNum2)});

// let resultDiv = document.getElementById('result');



// function addFunction(resultDiv) {
//   let singleNumInputInput = document.getElementById("singleNumInputInput").value
//   let secondInput = document.getElementById("secondInput").value
//   let addResult = singleNumInputInput + secondInput
//   resultDiv.append(addResult);
// }


