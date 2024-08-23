"use strict";
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;
const displayMessage= function(message) {
  document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    displayMessage("🚫 No Number");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "correct number";
    displayMessage("correct number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";
    if(score>highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if(guess !== secretNumber){
    if (score > 1) {
      // document.querySelector(".message").textContent = guess>secretNumber ? "Too High" : "Too Low";
      score--;
      displayMessage(guess>secretNumber ? "Too High" : "Too Low")
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game.";
      document.querySelector(".score").textContent = 0;
    }
  }
  
});

document.querySelector('.again').addEventListener('click', function() {
  document.querySelector(".score").textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "start guessing";
  displayMessage("start guessing")
  document.querySelector(".guess").value = '';
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";
})
