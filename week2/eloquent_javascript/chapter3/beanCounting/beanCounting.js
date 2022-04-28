function countChar(string, ch) {
  let char = 0;
  for(let i = 0; i < string.length; i++) {
    if (string[i] === ch) {
      char+=1;
    } 
  }
  return char;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));