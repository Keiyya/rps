'use strict';

const body = document.querySelector('body');
const buttons = document.querySelectorAll('.buttons');
const messageDisplay = document.getElementById('message');
const compScoreDisplay = document.getElementById('computer-score');
const userScoreDisplay = document.getElementById('player-score');
const newGame = document.querySelector('button');


let compScore, userScore, message, userChoice, compChoice, playing ;

function init(){
  compScore = 0;
  userScore = 0;
  playing = true;
  message = 'Hajimemashite 👳‍♂️'
  messageDisplay.innerText = message;
  compScoreDisplay.innerText = compScore;
  userScoreDisplay.innerText = userScore;
  body.style.backgroundColor = '#333'
}

init();

buttons.forEach(button => button.addEventListener('click', function(e){
  if(playing){
    userChoice = e.target.id;
    computerPlay();
    playRound();
  }
  gameOver();
}));

newGame.addEventListener('click', init);

function computerPlay(){
  let randomNr = Math.trunc(Math.random() * 3) + 1;
  if(randomNr === 1){
    compChoice = 'rock'
  }else if(randomNr === 2){
    compChoice = 'paper'
  }else{
    compChoice = 'scissors'
  }
}

function playRound(){
  if(userChoice === 'rock' && compChoice === 'scissors'){
    message = 'You Win! 😄 Rock ✊ crashes Scissors 🤞';
    userScore ++;
  }else if(userChoice === 'paper' && compChoice === 'rock'){
    message = 'You Win! 😄 Paper ✋ covers Rock ✊';
    userScore ++;
  }else if(userChoice === 'scissors' && compChoice === 'paper'){
    message = 'You Win! 😄 Scissors 🤞 cuts Paper ✋';
    userScore ++;
  }else if(compChoice === 'rock' && userChoice === 'scissors'){
    message = 'You Lose! 😦 Rock ✊ crashes Scissors 🤞';
    compScore ++;
  }else if(compChoice === 'paper' && userChoice === 'rock'){
    message = 'You Lose! 😦 Paper ✋ covers Rock ✊';
    compScore ++;
  }else if(compChoice === 'scissors' && userChoice === 'paper'){
    message = 'You Lose! 😦 Scissors 🤞 cuts Paper ✋';
    compScore ++;
  }else{
    message = 'Draw ⚔️'
  }

  messageDisplay.innerText = message;
  compScoreDisplay.innerText = compScore;
  userScoreDisplay.innerText = userScore;
}

function gameOver(){
  if(userScore === 5){
    playing = false;
    body.style.backgroundColor = 'green';
    message = 'Congratulations! 🎊 You Win! 😄';
    messageDisplay.innerText = message;
  }else if(compScore === 5){
    playing = false;
    body.style.backgroundColor = 'red';
    message = 'Boo Hoo! 👎 You Lose 😢';
    messageDisplay.innerText = message;
  }
}
