const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const messageDisplay = document.querySelector("#message");

const GAME_TIME = 5;

let word = ["HelloWord", "JavaScript", "TypeScript", "React", "Programing"];
let score = 0;
let time = 0;

wordInput.addEventListener("input", (e) => {
  const typedText = e.target.value;
  const currentText = currentWord.innerText;
  if (typedText.toUpperCase() === currentText.toUpperCase()) {
    addScore();
    setNewWord();
  }
});

function setNewWord() {
  time = GAME_TIME;
  wordInput.value = "";
  messageDisplay.innerText = "Now Playing 😃";
  const randomIndex = Math.floor(Math.random() * word.length);
  currentWord.innerText = word[randomIndex];
}

function addScore() {
  score = score + 1;
  scoreDisplay.innerText = score;
}
