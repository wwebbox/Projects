let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Loses: 0,
  Ties: 0,
};
updateScoreElement();

//document.querySelector('.js-score')
//.innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties:${score.Ties}`;

/*
if (!score)  {
score = {
  Wins: 0,
  Loses: 0,
  Ties: 0,
};
}
*/

function playGame(playerMove) {
const computerMove = pickComputerMove();
let results = '';
if (playerMove === 'Rock') {
  if (computerMove === 'Rock') {
    results = 'Tie';
  }
  else if (computerMove === 'Paper') {
    results = 'You Lose';
  }
  else if (computerMove === 'Scissors') {
    results = 'You Win';
  }
}
else if (playerMove === 'Paper') {
  if (computerMove === 'Rock')  {
    results = 'You Win';
  }
  else if (computerMove === 'Paper') {
    results = 'Tie';
  }
  else if (computerMove === 'Scissors') {
    results = 'You Lose';
  }
}
else if (playerMove === 'Scissors') {
  if (computerMove === 'Rock') {
    results = 'You Lose';
  }
  else if (computerMove === 'Paper') {
    results = 'You Win';
  }
  else if (computerMove === 'Scissors') {
    results = 'Tie';
  }
}
if (results === 'You Win') {
  score.Wins += 1;
}
else if (results === 'You Lose') {
  score.Loses += 1;
}
else if (results === 'Tie') {
  score.Ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateResultElement(results);
updateMoveElement(computerMove, playerMove);
updateScoreElement();
}

function updateResultElement(results) {
document.querySelector('.js-result').innerHTML = `${results}`
}

function updateMoveElement(computerMove, playerMove) {
document.querySelector('.js-moves').innerHTML = `You
<img class="move-icon" src="./RPS/${playerMove}.png">
<img  class="move-icon" src="./RPS/${computerMove}.png">
Computer`;
}

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties:${score.Ties}`;
}

function pickComputerMove() {
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove ='Rock';
}
else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'Paper';
}
else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'Scissors';
}
return computerMove;
}