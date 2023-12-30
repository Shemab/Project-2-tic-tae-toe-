// Variables for box buttons
let boxes = document.querySelectorAll(".box");

// Variable for Reset button
let resetButton = document.querySelector(".Reset");

// Which player? Alternative turn variable
let turn = true;

// Winning pattern in 2D array
const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 4, 6],
  [2, 5, 8],
  [1, 4, 7],
];

// Button click event using forEach loop
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === true) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

// Reset button click event
resetButton.addEventListener("click", () => {
  // Clear the board
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });

  // Remove the winner message if it exists
  removeWinnerMessage();
  
  // Reset the turn to true for the next game
  turn = true;
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) Winner(pos1);
    }
  }
};

const Winner = (symbol) => {
  let newText = document.createElement("h1");
  newText.innerText = " Winner " + symbol;
  newText.style.fontSize = "50px";
  newText.style.backgroundColor = "black";
  newText.style.color = "ghostwhite";

  document.body.appendChild(newText);
};

const removeWinnerMessage = () => {
  // Remove the winner message if it exists
  let winnerMessage = document.querySelector("h1");
  if (winnerMessage) {
    winnerMessage.remove();
  }
};
