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

let num = Math.trunc(Math.random() * 20) + 1;
// console.log(num);

function showMessage(message) {
  messageScore.textContent = message;
}

checkBtn.addEventListener('click', function () {
  let guessNumber = Number(guessInput.value); // valueAsNumber

  if (!guessNumber) {
    showMessage('π no number!');
  } else if (guessNumber === num) {
    secretNumber.textContent = num; // ATENΓΓO NESSA LINHHA FIXME
    if (currentScore > 1) {
      showMessage('Yaaaay π');
      currentHighscore++;
      highscore.textContent = currentHighscore;
      body.style.backgroundColor = '#60b347';
      secretNumber.style.width = '30rem';
    }
  } else if (guessNumber !== num) {
    if (currentScore > 1) {
      showMessage(guessNumber > num ? 'π Too high!' : 'π Too low!');
      currentScore--;
      score.textContent = currentScore;
    } else {
      showMessage('Oh no! you lost π₯');
    }
  }
});

againBtn.addEventListener('click', function () {
  score.textContent = '10';
  highscore.textContent = '0';
  messageScore.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  secretNumber.style.width = '15rem';
  guessInput.value = '';
  secretNumber.textContent = '?';
  num = Math.trunc(Math.random() * 20) + 1;
  //   console.log(num);
});
