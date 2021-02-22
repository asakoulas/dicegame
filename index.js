//First random dice image
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomDice1 = "dice" + randomNumber1 + ".png"; 
var randomDiceSource1 = randomDice1;

document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource1);

//Second random dice image
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDice2 = "dice" + randomNumber2 + ".png";
var randomDiceSource2 = randomDice2;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

//H1 that changes
function varWinner() {

    if(randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    else if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
        document.querySelectorAll("p")[1].style.color = "red";
        document.querySelectorAll("p")[1].style.textDecorationLine = "line-through";
    }

    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
        document.querySelectorAll("p")[0].style.color = "red";
        document.querySelectorAll("p")[0].style.textDecorationLine = "line-through";
    }
};

varWinner();

//Reload page button
function reloadMe() {
    onclick = window.location.reload();
};
