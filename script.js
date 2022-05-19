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

const R = "Rock";
const P = "Paper";
const S = "Scissors";

function getComputerChoice() {
    const CHOICES = [R, P, S];
    var randomChoice = Math.floor(Math.random() * 3);
    return CHOICES[randomChoice];
}

function game(userChoice) {
    const COMPUTERCHOICE = getComputerChoice();
    console.log("user " + userChoice);
    console.log("comp " + COMPUTERCHOICE);

    getResults(userChoice, COMPUTERCHOICE);
    
}

function winConditions(user, computer) {
    wins++;
    win_span.innerHTML = wins;
    console.log("USER WINS " + wins);

    outcome_div.innerHTML = user + " (You)" + " beats " + computer + " (Comp)" + " You win!";
}

function loseConditions(user, computer) {
    losses++;
    loss_span.innerHTML = losses;
    console.log("LOSS " + losses);
    outcome_div.innerHTML = computer + " (Comp)" + " beats " + user + "(You)" + " You lose!";
}

function drawConditions(user, computer) {
    draws++;
    draw_span.innerHTML = draws;
    console.log("DRAW " + draws);
    outcome_div.innerHTML = user + " (You)" + " is the same as " + computer + "(Comp)" + " It's a Draw !";
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

