let choices = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let playerChoice ="";
let computerChoice ="";
let results = ["YOU WON!","YOU LOST.","IT'S A TIE!"];

let score1 = document.createElement('span');
score1.textContent = playerScore;
score1.style.color = playerScore > 0 ? "green" : "red";

let score2 = document.createElement('span');
score2.style.color = computerScore > 0 ? "green" : "red";
score2.textContent = computerScore;

let buttons = document.querySelectorAll('.choice');
buttons.forEach((element) => {
element.addEventListener("click",() => {
    playerChoice = element.id;
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    document.getElementById('playerChoice').textContent = "PLAYER : " + playerChoice;
    document.getElementById('computerChoice').textContent = "Computer : " + computerChoice;

    if(playerChoice==computerChoice){
     document.getElementById('result').textContent = results[2];
     document.getElementById('result').style.color = "black";
     document.getElementById('playerScore').append(score1);
     document.getElementById('computerScore').append(score2);
    }

    else if((playerChoice=="rock" && computerChoice=="scissors") ||
            (playerChoice=="paper" && computerChoice=="rock") ||
            (playerChoice=="scissors" && computerChoice=="paper") )
        { 
        document.getElementById('result').textContent = results[0];
        document.getElementById('result').style.color = "green";
        playerScore++;
        score1.textContent = playerScore;
        score1.style.color = playerScore > 0 ? "green" : "red";
        document.getElementById('playerScore').append(score1);
        document.getElementById('computerScore').append(score2);
    }

    else {
        document.getElementById('result').textContent = results[1];
        document.getElementById('result').style.color = "red";
        computerScore++;
        score2.textContent = computerScore;
        score2.style.color = computerScore > 0 ? "green" : "red";
        document.getElementById('playerScore').append(score1);
        document.getElementById('computerScore').append(score2);
        
    }
  
})
})


