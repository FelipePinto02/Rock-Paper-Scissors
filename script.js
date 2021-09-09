// getting the computer's play for the round
let playerPoints = 0
let computerPoints = 0


function computerPlay() {
    let compOptions = ['rock', 'paper', 'scissor']
    let compPlay = compOptions[Math.floor(Math.random()*compOptions.length)];
    return(compPlay)
}
let computerSelection
// getting the player's play for the round with a window prompt
//const playerSelection = window.prompt('What\'s your play?', 'Rock, Paper or Scissor?').toLowerCase()


// gives the result of the round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()
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

function game() {
    computerSelection = computerPlay()
    const playerSelection = window.prompt('What\'s your play?', 'Rock, Paper or Scissor?').toLowerCase()
    playRound(playerSelection, computerSelection)
    if (playRound(playerSelection, computerSelection) == 'You won') {
        console.log(playRound(playerSelection, computerSelection))
        playerPoints += 1
        console.log(`Your score: ${playerPoints}`)
        console.log(`Computer\'s score: ${computerPoints}`)
    }
    if (playRound(playerSelection, computerSelection) == 'You lost') {
        console.log(playRound(playerSelection, computerSelection))
        computerPoints += 1
        console.log(`Your score: ${playerPoints}`)
        console.log(`Computer\'s score: ${computerPoints}`)
    }
    if (playRound(playerSelection, computerSelection) == 'It\'s a tie') {
        console.log(playRound(playerSelection, computerSelection))
        console.log(`Your score: ${playerPoints}`)
        console.log(`Computer\'s score: ${computerPoints}`)
    }
}

//console.log(game()) 
for (let i=1; i <= 5; i++) {
    console.log(`Game #${i}`)
    game()
    console.log(' ')
}

// if player chooses rock
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

// if player chooses paper
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

// if player chooses scissor
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

