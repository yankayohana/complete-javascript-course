'use strict';
const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
let messageScore = document.querySelector('.message');
let secretNumber = document.querySelector('.number');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let body = document.querySelector('body');
let againBtn = document.querySelector('.again');

let currentScore = 10;
let currentHighscore = 0;

const num = Math.trunc(Math.random() * 20) + 1;
console.log(num);

checkBtn.addEventListener('click', function () {
  let guessNumber = Number(guessInput.value); // valueAsNumber

  if (!guessNumber) {
    messageScore.textContent = '👎 no number!';
  } else if (guessNumber === num) {
    secretNumber.textContent = num; // ATENÇÃO NESSA LINHHA FIXME
    if (currentScore > 1) {
      messageScore.textContent = 'Yaaaay 🎉';
      currentHighscore++;
      highscore.textContent = currentHighscore;
      body.style.backgroundColor = '#60b347';
      secretNumber.style.width = '30rem';
    }
  } else if (guessNumber > num) {
    if (currentScore > 1) {
      messageScore.textContent = '📈 Too high!';
      currentScore--;
      score.textContent = currentScore;
    } else {
      messageScore.textContent = 'Oh no! you lost 😥';
    }
  } else {
    if (currentScore > 1) {
      messageScore.textContent = '📉 Too low!';
      currentScore--;
      score.textContent = currentScore;
    } else {
      messageScore.textContent = 'Oh no! you lost 😥';
    }
  }
});

againBtn.addEventListener('click', function () {
  currentScore = 10;
  currentHighscore = 0;
  messageScore.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  secretNumber.style.width = '15rem';
  guessInput.value = '';
  secretNumber.textContent = '?';
});
