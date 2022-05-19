var wins = 0;
var losses = 0;
var draws = 0;

var win_span = document.getElementById("win-score");
var loss_span = document.getElementById("loss-score");
var draw_span = document.getElementById("draw-score");

var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");

const R = "rock";
const P = "paper";
const S = "scissors";

function getComputerChoice() {
    const CHOICES = [R, P, S];
    var randomChoice = Math.floor(Math.random() * 3);
    return CHOICES[randomChoice];
}

function game(userChoice) {
    const COMPUTERCHOICE = getComputerChoice();
    console.log("user " + userChoice);
    console.log("comp " + COMPUTERCHOICE);

    checkWinConditions(userChoice, COMPUTERCHOICE);
    
}


function checkWinConditions(userChoice, computerChoice) {
    switch (userChoice + computerChoice) {
        case R + S:
        case S + P:
        case P + R:
            wins++;
            console.log("USER WINS " + wins);
            break;
        case S + R:
        case P + S:
        case R + P:
            losses++;
            console.log("LOSS " + losses);
            break;
        case R + R:
        case P + P:
        case S + S:
            draws++;
            console.log("DRAW " + draws);
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

