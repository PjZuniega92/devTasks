let result = "";

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

function rock() {
  const computerMove = whoWin();
  if (computerMove === "rock") {
    result = "Tie.";
  } else if (computerMove === "paper") {
    result = "You lose.";
  } else if (computerMove === "scissors") {
    result = "You win.";
  }
  alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
}

function paper() {
  const computerMove = whoWin();
  if (computerMove === "paper") {
    result = "Tie";
  } else if (computerMove === "rock") {
    result = "You win!";
  } else if (computerMove === "scissors") {
    result = "You lose.";
  }
  alert(`You picked paper. Computer picked ${computerMove}. ${result}`);
}

function scissors() {
  const computerMove = whoWin();
  if (computerMove === "scissors") {
    result = "Tie.";
  } else if (computerMove === "rock") {
    result = "You win!";
  } else if (computerMove === "paper") {
    result = "You lose.";
  }
  alert(`You picked scissors. Computer picked ${computerMove}. ${result}`);
}
