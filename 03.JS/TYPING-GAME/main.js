const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const messageDisplay = document.querySelector("#message");

const GAME_TIME = 5;

const API_URL = "https://random-word-api.herokuapp.com/word?number=100";

let words = ["HelloWord", "JavaScript", "TypeScript", "React", "Programing"];
let score = 0;
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;

asyncInit();

function fetchInit() {
  const res = fetch(API_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //console.log(data);
      words = data;
    });
}

async function asyncInit() {
  const res = await fetch(API_URL);
  const data = await res.json();
  words = data.filter((item) => {
    return item.length < 7;
  });
  isReady = true;
  console.log(words);
}

wordInput.addEventListener("input", (e) => {
  const typedText = e.target.value;
  const currentText = currentWord.innerText;
  if (typedText.toUpperCase() === currentText.toUpperCase() && isReady) {
    addScore();
    setNewWord();
  }
});
// 게임 종료
function gameOver() {
  isPlaying = false;
  clearInterval(timeInterval);
  timeInterval = null;
  messageDisplay.innerText = "GAME OVER!";
  score = 0;
}

// 시간 카운트 다운
function countDown() {
  //console.log(time);
  time = time - 1;
  timeDisplay.innerText = time;
  if (time === 0) {
    gameOver();
  }
}

function setNewWord() {
  time = GAME_TIME;
  wordInput.value = "";
  messageDisplay.innerText = "Now Playing 😃";
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerText = words[randomIndex];

  if (!isPlaying) {
    // !isPlaying이 false이면
    timeInterval = setInterval(countDown, 1000);
    isPlaying = true;
  }
}

function addScore() {
  score = score + 1;
  scoreDisplay.innerText = score;
}
