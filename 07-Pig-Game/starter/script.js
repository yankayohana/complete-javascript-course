'use strict';
const score = document.querySelectorAll('.score');
const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.querySelector('#score--1');
const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// starting conditions
// function setInitialScore() {
//   for (let i = 0; i < score.length; i++) {
//     score[i].textContent = 0;
//   }
// }

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

// rolling dice
btnRoll.addEventListener('click', function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    currentScorePlayer1.textContent = currentScore;
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

// setInitialScore();
