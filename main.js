var numSquares = 6;
var colors = [];
var randomColor;
var pickSquare = document.querySelectorAll(".square");
var result = document.querySelector("#result");
var header = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
  setupModeButtons();
  setupSquares();
  resetModeButtons();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      header.style.backgroundColor = "#232323";
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
      resetModeButtons();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < pickSquare.length; i++) {
    // add click listener to squares
    pickSquare[i].addEventListener("click", function() {
        // grab color of clicked squares
        var clickedColor = this.style.backgroundColor;
        // compare color to randomColor
        if (clickedColor === randomColor) {
          result.textContent = "Correct!";
          changeColors(clickedColor);
          reset.textContent = "PLAY AGAIN?";
          header.style.backgroundColor = clickedColor;
        } else {
          this.style.backgroundColor = "#232323";
          result.textContent = "Try Again";
        }
    });
  }
}


function resetModeButtons(){
  colors = generateRandomColors(numSquares);
  // Pick New Color
  randomColor = pickColor();
  //Change colorDisplay to match picked colors
  colorDisplay.textContent = randomColor;
  result.textContent = "";
  reset.textContent = "NEW COLORS";
  //Change colors of squares
  for (var i = 0; i < pickSquare.length; i++) {
    if (colors[i]) {
      pickSquare[i].style.display = "block";
      pickSquare[i].style.backgroundColor = colors[i];
    } else {
      pickSquare[i].style.display = "none";
    }
  }
  header.style.backgroundColor = "#232323";
}

reset.addEventListener("click", function(){
  resetModeButtons();
});

function changeColors(color){
  for (var i = 0; i < pickSquare.length; i++) {
    pickSquare[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var randomNumber = Math.floor(Math.random()*colors.length);
  return colors[randomNumber];
}

function generateRandomColors(num){
  //make and array
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(generateRandomColor());
  }
  //return that array
  return arr;
}

function generateRandomColor() {
  // pick a "red" from 0-255, "green" from 0-255, "blue" from 0-255
  var r = Math.floor(Math.random()*256)
  var g = Math.floor(Math.random()*256)
  var b = Math.floor(Math.random()*256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
