// starting points for the game
let playerPoints = 0
let computerPoints = 0

// getting the computer's input
function computerPlay() {
    let compOptions = ['rock', 'paper', 'scissor']
    let compPlay = compOptions[Math.floor(Math.random()*compOptions.length)];
    return(compPlay)
}

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

let playerScore = document.querySelector('.player-score')
let computerScore = document.querySelector('.computer-score')
let winner = document.querySelector('.winner')
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorBtn = document.querySelector('.scissor')
const playerChoiceDiv = document.querySelector('#player-choice')
const playerChoice = document.createElement('img')
const computerChoiceDiv = document.querySelector('#computer-choice')
const computerChoice = document.createElement('img')

rockBtn.addEventListener('click', clickRock)
paperBtn.addEventListener('click', clickPaper)
scissorBtn.addEventListener('click', clickScissor)

function clickRock() {
    computerSelection = computerPlay()
    showComputerChoice(computerSelection)
    const playerSelection = 'rock'
    playerChoiceDiv.appendChild(playerChoice)
    playerChoice.src = 'imgs/rock.png'
    playerChoice.alt = 'rock'
    playRound(playerSelection, computerSelection)
    if (playRound(playerSelection, computerSelection) == 'You won') {
        playerPoints += 1
        winner.textContent = 'You won, rock beats scissor! Point for you!'
    }
    if (playRound(playerSelection, computerSelection) == 'You lost') {
        computerPoints += 1
        winner.textContent = 'You lost, paper beats rock... Point for the robot!'
    }
    if (playRound(playerSelection, computerSelection) == 'It\'s a tie') {
        winner.textContent = 'It\'s a tie.'
    }
    playerScore.textContent = playerPoints
    computerScore.textContent = computerPoints
    checkWinner()
}
function clickPaper() {
    computerSelection = computerPlay()
    showComputerChoice(computerSelection)
    const playerSelection = 'paper'
    playerChoiceDiv.appendChild(playerChoice)
    playerChoice.src = 'imgs/paper.png'
    playerChoice.alt = 'paper'
    playRound(playerSelection, computerSelection)
    if (playRound(playerSelection, computerSelection) == 'You won') {
        playerPoints += 1
        winner.textContent = 'You won, paper beats rock! Point for you!'
    }
    if (playRound(playerSelection, computerSelection) == 'You lost') {
        computerPoints += 1
        winner.textContent = 'You lost, scissor beats paper... Point for the robot!'
    }
    if (playRound(playerSelection, computerSelection) == 'It\'s a tie') {
        winner.textContent = 'It\'s a tie.'
    }
    playerScore.textContent = playerPoints
    computerScore.textContent = computerPoints
    checkWinner()
}
function clickScissor() {
    computerSelection = computerPlay()
    showComputerChoice(computerSelection)
    const playerSelection = 'scissor'
    playerChoiceDiv.appendChild(playerChoice)
    playerChoice.src = 'imgs/scissor.png'
    playerChoice.alt = 'scissor'
    playRound(playerSelection, computerSelection)
    if (playRound(playerSelection, computerSelection) == 'You won') {
        playerPoints += 1
        winner.textContent = 'You won, scissor beats paper! Point for you!'
    }
    if (playRound(playerSelection, computerSelection) == 'You lost') {
        computerPoints += 1
        winner.textContent = 'You lost, rock beats scissor... Point for the robot!'
    }
    if (playRound(playerSelection, computerSelection) == 'It\'s a tie') {
        winner.textContent = 'It\'s a tie.'
    }
    playerScore.textContent = playerPoints
    computerScore.textContent = computerPoints
    checkWinner()
}

/* --------------------------------------- helper functions --------------------------------------- */

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

// checking who won the game
function checkWinner() {
    if (playerPoints === 5) {
        alert('You won!!')
        playerPoints = 0
        computerPoints = 0
        playerScore.textContent = playerPoints
        computerScore.textContent = computerPoints
        winner.textContent = 'Make your choice'
        playerChoiceDiv.removeChild(playerChoice)
        computerChoiceDiv.removeChild(computerChoice)
    }
    if (computerPoints === 5) {
        alert('You lost...')
        playerPoints = 0
        computerPoints = 0
        playerScore.textContent = playerPoints
        computerScore.textContent = computerPoints
        winner.textContent = 'Make your choice'
        playerChoiceDiv.removeChild(playerChoice)
        computerChoiceDiv.removeChild(computerChoice)
    } 
}

function showComputerChoice(computerSelection) {
    if (computerSelection == 'rock') {
        computerChoiceDiv.appendChild(computerChoice)
        computerChoice.src = 'imgs/rock.png'
        computerChoice.alt = 'rock'
    }
    if (computerSelection == 'paper') {
        computerChoiceDiv.appendChild(computerChoice)
        computerChoice.src = 'imgs/paper.png'
        computerChoice.alt = 'paper'
    }
    if (computerSelection == 'scissor') {
        computerChoiceDiv.appendChild(computerChoice)
        computerChoice.src = 'imgs/scissor.png'
        computerChoice.alt = 'scissor'
    }
}