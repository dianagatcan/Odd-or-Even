const buttons = document.getElementsByClassName("button");

const title = document.getElementById("title");

const hiddenButton = document.getElementById("again");

const againMessage = document.querySelector("h2");

//Transform from node to array
const arrButtons = Array.prototype.slice.call(buttons);

//Generate a random number
generateRandom = () => {
  document.getElementById("number").innerHTML = Math.floor(Math.random() * 100);
};

generateRandom();

// Verify if the number is even or odd
const verifyNumber = function () {
  if (document.getElementById("number").innerHTML % 2 === 0) {
    return "Even";
  }
  return "Odd";
};

////TIMER

var timeLeft = 5;
var interval = setInterval(timer, 1000);

function timer() {
  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "Time out";
    lose();
  } else if (timeLeft > 0) {
    document.getElementById("countdown").innerHTML = `00:0${timeLeft}`;
  }
  timeLeft -= 1;
}

function disableButtons() {
  arrButtons.forEach((button) => {
    button.setAttribute("disabled", true);
  });
}

// Add event listener for buttons
arrButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (verifyNumber() === button.innerHTML) {
      timeLeft = 5;
      win();
    } else {
      lose();
      timeleft = -1;
    }
  });
});

hiddenButton.addEventListener("click", () => {
  resetGame();
});

// Win and Lose funcstions
function win() {
  title.innerHTML = "You did it! 🤩";
  generateRandom();
}

function lose() {
  clearInterval(interval);
  //Modify H1
  title.innerHTML = "You lost 😔";
  //Show h2
  againMessage.innerHTML = "Would you like to try another one?";
  //Show button
  hiddenButton.hidden = false;
  //Generate a new random number, modify H1 and hide button and h2
  document.getElementById("countdown").innerHTML = "";
  document.body.classList.add("lost");

  disableButtons();
}

//Reset all the necessary things
function resetGame() {
  generateRandom();
  hiddenButton.hidden = true;
  againMessage.innerHTML = "";
  title.innerHTML = "Odd or Even";
  arrButtons.forEach((button) => {
    button.removeAttribute("disabled");
  });
  timeLeft = 5;
  interval = setInterval(timer, 1000);
  document.body.classList.remove("lost");
}
