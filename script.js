// starting points for the game
let playerPoints = 0
let computerPoints = 0

// getting the computer's input
function computerPlay() {
    let compOptions = ['rock', 'paper', 'scissor']
    let compPlay = compOptions[Math.floor(Math.random()*compOptions.length)];
    return(compPlay)
}
let computerSelection

// checks the result of the round
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
}

/* --------------------------------------- evaluating player's choices --------------------------------------- */

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



let playerScore = document.querySelector('.player-score')
let computerScore = document.querySelector('.computer-score')
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorBtn = document.querySelector('.scissor')



rockBtn.addEventListener('click', clickRock)
paperBtn.addEventListener('click', clickPaper)
scissorBtn.addEventListener('click', clickScissor)

function clickRock() {
    computerSelection = computerPlay()
    const playerSelection = 'rock'
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
    playerScore.textContent = playerPoints
    computerScore.textContent = computerPoints
}
function clickPaper() {
    computerSelection = computerPlay()
    const playerSelection = 'paper'
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
    playerScore.textContent = playerPoints
    computerScore.textContent = computerPoints
}
function clickScissor() {
    computerSelection = computerPlay()
    const playerSelection = 'scissor'
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
    playerScore.textContent = playerPoints
    computerScore.textContent = computerPoints
}


