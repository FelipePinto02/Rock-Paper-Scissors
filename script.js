function computerPlay() {
    let compOptions = ['rock', 'paper', 'scissor']
    let compPlay = compOptions[Math.floor(Math.random()*compOptions.length)];
    return(compPlay)
}
const computerSelection = computerPlay()
const playerSelection = window.prompt('What\'s your play?', 'Rock, Paper or Scissor?').toLowerCase()

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        return(playRock(playerSelection))
    }

    if (playerSelection === 'paper')  {
        return(playPaper(playerSelection))
    } 

    if (playerSelection === 'scissor')  {
        return(playScissor(playerSelection))
    }     
};

function playRock(playerSelection) {
    if (playerSelection === 'rock')  {
        if (computerSelection == 'rock') {
            return('It\'s a tie')
        }
        if (computerSelection == 'paper') {
            return('You lost')
        }
        if (computerSelection == 'scissor') {
            return('You won')
        }
    } 
}
function playPaper(playerSelection) {
    if (playerSelection === 'paper')  {
        if (computerSelection == 'paper') {
            return('It\'s a tie')
        }
        if (computerSelection == 'scissor') {
            return('You lost')
        }
        if (computerSelection == 'rock') {
            return('You won')
        }
    } 
}
function playScissor(playerSelection) {
    if (playerSelection === 'scissor')  {
        if (computerSelection == 'scissor') {
            return('It\'s a tie')
        }
        if (computerSelection == 'rock') {
            return('You lost')
        }
        if (computerSelection == 'paper') {
            return('You won')
        }
    }
}


console.log(playRound(playerSelection, computerSelection))