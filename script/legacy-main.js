let randomMoveGenerator = "";
let result = "";
let computerMove = "";

document.querySelector(".btn-rock").addEventListener("click", () => {
  randomMoveGenerator = Math.floor(Math.random() * 3) + 1;
  if (randomMoveGenerator === 1) {
    computerMove = "rock";
    result = "tie.";
    alert(`Player choose rock and Computer choose ${computerMove}. The result is ${result}`);
  } else if (randomMoveGenerator === 2) {
    computerMove = "paper";
    result = "Computer Wins!";
    alert(`Player choose rock and Computer choose ${computerMove}. The result is ${result}`);
  } else {
    computerMove = "scissors";
    result = "Player Wins!";
    alert(`Player choose rock and Computer choose ${computerMove}. The result is ${result}`);
  }
});

document.querySelector(".btn-paper").addEventListener("click", () => {
  randomMoveGenerator = Math.floor(Math.random() * 3) + 1;
  if (randomMoveGenerator === 1) {
    computerMove = "rock";
    result = "Player Wins!";
    alert(`Player choose paper and Computer choose ${computerMove}. The result is ${result}`);
  } else if (randomMoveGenerator === 2) {
    computerMove = "paper";
    result = "Tie.";
    alert(`Player choose paper and Computer choose ${computerMove}. The result is ${result}`);
  } else {
    computerMove = "scissors";
    result = "Computer Wins!";
    alert(`Player choose paper and Computer choose ${computerMove}. The result is ${result}`);
  }
});

document.querySelector(".btn-scissors").addEventListener("click", () => {
  randomMoveGenerator = Math.floor(Math.random() * 3) + 1;
  if (randomMoveGenerator === 1) {
    computerMove = "rock";
    result = "Computer Wins!";
    alert(`Player choose scissors and Computer choose ${computerMove}. The result is ${result}`);
  } else if (randomMoveGenerator === 2) {
    computerMove = "paper";
    result = "Player Wins!";
    alert(`Player choose scissors and Computer choose ${computerMove}. The result is ${result}`);
  } else {
    computerMove = "scissors";
    result = "Tie.";
    alert(`Player choose scissors and Computer choose ${computerMove}. The result is ${result}`);
  }
});
