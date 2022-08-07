"use strict";

//const totalScore0 = document.querySelector('#score--0');
const totalScore0 = document.getElementById("score--0");
const totalScore1 = document.getElementById("score--1");
let currentScore0 = document.getElementById("current--0");
let currentScore1 = document.getElementById("current--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const holdBtn = document.querySelector(".btn--hold");
const newBtn = document.querySelector(".btn--new");

let currentScore,
  activeUser,
  totalScores = [];

const init = () => {
  totalScore0.textContent = 0;
  totalScore1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  currentScore = 0;
  dice.classList.add("hidden");
  activeUser = 0;
  totalScores = [0, 0];

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");

  btnRoll.removeAttribute("disabled");
  btnRoll.style.cursor = "pointer";
  holdBtn.removeAttribute("disabled");
  holdBtn.style.cursor = "pointer";

  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

init();

const showCurrentScore = (activeId) => {
  document.getElementById("current--" + activeId).textContent = currentScore;
};

const changeActiveClass = () => {
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = "img/dice-" + randomNumber + ".png";

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    showCurrentScore(activeUser);
  } else {
    currentScore = 0;
    showCurrentScore(activeUser);

    activeUser = activeUser === 0 ? 1 : 0;
    changeActiveClass();
  }
});
const winnerAudio = new Audio("./Audios/playerWin.mp3");
holdBtn.addEventListener("click", function () {
  dice.classList.add("hidden");

  totalScores[activeUser] += currentScore;
  currentScore = 0;

  showCurrentScore(activeUser);
  document.getElementById("score--" + activeUser).textContent =
    totalScores[activeUser];
  if (totalScores[activeUser] >= 100) {
    document
      .querySelector(".player--" + activeUser)
      .classList.add("player--winner");
    btnRoll.setAttribute("disabled", true);
    btnRoll.style.cursor = "not-allowed";
    holdBtn.setAttribute("disabled", true);
    holdBtn.style.cursor = "not-allowed";
    winnerAudio.play();
  }

  activeUser = activeUser === 0 ? 1 : 0;
  changeActiveClass();
});

newBtn.addEventListener("click", init);
