//DOM Vars.
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === 'r') return "Rock";
    if (letter === 's') return "Scissors";
    if (letter === 'p') return "Papper";
}

function playerWin(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(1.3).sup();
    const smallCompWord = "comp".fontsize(1.3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore+=1;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win..!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"),500);
}

function playerLose(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(1.3).sup();
    const smallCompWord = "comp".fontsize(1.3).sup();
    compScore+=1;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost..`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"),500);
}

function draw(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(1.3).sup();
    const smallCompWord = "comp".fontsize(1.3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw..!`;
    userChoice_div.classList.add("yellow-glow");
    setTimeout(() => userChoice_div.classList.remove("yellow-glow"),500);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            playerWin(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            playerLose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click',() => game("p"));
    scissors_div.addEventListener('click',() => game("s"));
}

main();