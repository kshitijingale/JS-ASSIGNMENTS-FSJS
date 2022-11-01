const userScoreVal = document.getElementById('userScoreVal');
const compScoreVal = document.getElementById('compScoreVal');
const userStat = document.getElementById('result-user-stat');
const compStat = document.getElementById('result-comp-stat');
const win = document.getElementById('result-final-stat');
const choice = document.querySelectorAll('.choice');

const choices = ['r', 'p', 's'];
let userScore = 0;
let compScore = 0;

choice.forEach((sign) => {
    sign.addEventListener('click', () => {
        win.innerText = "Winner: ";
        userStat.innerText = "User: ";
        compStat.innerText = "Computer: ";
        const userChoice = sign.id;

        if (userChoice == 'r') {
            userStat.innerText += "Rock";
        }
        else if (userChoice == 'p') {
            userStat.innerText += "Paper";
        }
        else if (userChoice == 's') {
            userStat.innerText += "Scissors";
        }

        const compChoice = choices[Math.floor(Math.random() * 3)];

        if (compChoice == 'r') {
            compStat.innerText += "Rock";
        }
        else if (compChoice == 'p') {
            compStat.innerText += "Paper";
        }
        else if (compChoice == 's') {
            compStat.innerText += "Scissors";
        }

        const Winner = winner(userChoice, compChoice);
        win.innerText += Winner;

        if (Winner == 'Draw') {
            userScore += 1;
            compScore += 1;
        }
        else if (Winner == 'Computer') {
            compScore += 1;
        }
        else if (Winner == 'User') {
            userScore += 1;
        }

        userScoreVal.innerText = userScore;
        compScoreVal.innerText = compScore;
    })
})


const winner = (userChoice, compChoice) => {
    if (userChoice == compChoice) {
        return "Draw";
    }
    else if ((userChoice == 'r' && compChoice == 's') || (userChoice == 'p' && compChoice == 'r') || (userChoice == 's' && compChoice == 'p')) {
        return "User";
    }
    else if ((userChoice == 's' && compChoice == 'r') || (userChoice == 'r' && compChoice == 'p') || (userChoice == 'p' && compChoice == 's')) {
        return "Computer";
    }
}







