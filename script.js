const words = {
  apple: "яблуко",
  house: "будинок",
  mouse: "миша",
};

let mistakes = 0;
let correctAnswers = 0;

for (const key in words) {
  //const element = words[key];
  alert(key);
  let input = prompt("Input translation of word " + key);
  if (input == "" || input == "!") {
    alert("!!!");
    break;
  }
  if (input == words[key]) {
    alert(":)");
    correctAnswers++;
  }
  else {
    alert(":(");
    mistakes++;
  }
}
alert(`correctAnswers: ${correctAnswers} mistakes: ${mistakes}`);
