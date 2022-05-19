var wins = 0;
var losses = 0;
var draws = 0;

var win_span = document.getElementById("win-score");
var loss_span = document.getElementById("loss-score");
var draw_span = document.getElementById("draw-score");

var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");

var outcome_div = document.querySelector(".outcome > p");

const R = "rock";
const P = "paper";
const S = "scissors";

const WIN = "win";
const LOST = "lost";
const DRAW = "draw";

function getComputerChoice() {
    const CHOICES = [R, P, S];
    var randomChoice = Math.floor(Math.random() * 3);
    return CHOICES[randomChoice];
}

function game(userChoice) {
    const COMPUTERCHOICE = getComputerChoice();
    getResults(userChoice, COMPUTERCHOICE);
}

function winConditions(user, computer) {
    const result = WIN;
    wins++;
    win_span.innerHTML = wins;

    updateOutcomeMsg(user, computer, result);
    changeUserSelectionBorder(user, result);
}

function loseConditions(user, computer) {
    const result = LOST;

    losses++;
    loss_span.innerHTML = losses;

    updateOutcomeMsg(user, computer, result);
    changeUserSelectionBorder(user, result);
}

function drawConditions(user, computer) {
    const result = DRAW;

    draws++;
    draw_span.innerHTML = draws;

    updateOutcomeMsg(user, computer, result);
    changeUserSelectionBorder(user, result);
}

function updateOutcomeMsg(user, computer, result) {
    if(result == DRAW) {
        outcome_div.innerHTML = user + " (You)" + " vs " + computer + " (Comp). " + "It's a draw!";

    } else {
    outcome_div.innerHTML = user + " (You)" + " vs " + computer + " (Comp). " + "You " + result + "!";
    }
}

function changeUserSelectionBorder(user, result) {
    var resultColor = getResultColor(result);
    
    document.getElementById(user).classList.add(resultColor);
    setTimeout(function () {
        document.getElementById(user).classList.remove(resultColor);
    }, 1000);
}

function getResultColor(result) {
    var resultColor;
    switch (result) {
        case WIN:
            resultColor = "green-border";
            break;
        case LOST:
            resultColor = "red-border";
            break;
        case DRAW:
            resultColor = "gray-border";
            break;
    }
    return resultColor;
}

function getResults(userChoice, computerChoice) {
    switch (userChoice + computerChoice) {
        case R + S:
        case S + P:
        case P + R:
            winConditions(userChoice, computerChoice);
            break;
        case S + R:
        case P + S:
        case R + P:
            loseConditions(userChoice, computerChoice);
            break;
        case R + R:
        case P + P:
        case S + S:
            drawConditions(userChoice, computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', function() {
        game(R);
    })

    paper_div.addEventListener('click', function () {
        game(P);
    })

    scissors_div.addEventListener('click', function () {
        game(S);
    })
}

main();

