const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

paperBtn.onclick = () => playGame("paper");
rockBtn.onclick = () => playGame("rock");
scissorsBtn.onclick = () => playGame("scissors");

function whoWin() {
  let randomMove = Math.floor(Math.random() * 3);
  let computerMove = "";

  if (randomMove === 1) {
    computerMove = "rock";
  } else if (randomMove === 2) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  let result = "";
  const computerMove = whoWin();
  if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "You lose.";
    }
    alert(
      `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`
    );
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
    alert(
      `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`
    );
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
    alert(
      `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`
    );
  }
}
