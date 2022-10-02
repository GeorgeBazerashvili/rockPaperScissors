const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const yourScore = document.querySelector('.left')
const result = document.getElementById("result")
const result2 = document.getElementById("result2")
const computerScore = document.querySelector('.right')
const resetScoreBtn = document.getElementById('reset')

rock.addEventListener('click', (e) => {
    const playerChoise = e.target.classList
    console.log(playerChoise)
    const choises = ["rock", "paper", "scissors"]
    const compChoise = Math.floor(Math.random() * choises.length)
    const randomItem = choises[compChoise]
    if (playerChoise == "rock" && randomItem == "paper") {
        result2.innerText = "Computer Wins!"
        computerScore.innerText++
    } else if (playerChoise == "rock" && randomItem == "scissors") {
        result2.innerText = "You Win!"
        yourScore.innerText++
    } else if (playerChoise == "rock" && randomItem == "rock") {
        result2.innerText = "It's a Draw!"
    }
    result.innerText = `${playerChoise} vs ${randomItem}`
})

paper.addEventListener('click', (e) => {
    const playerChoise = e.target.classList
    const choises = ["rock", "paper", "scissors"]
    const compChoise = Math.floor(Math.random() * choises.length)
    const randomItem = choises[compChoise]
    if (playerChoise == "paper" && randomItem == "rock") {
        result2.innerText = "You Win!"
        yourScore.innerText++
    } else if (playerChoise == "paper" && randomItem == "paper") {
        result2.innerText = "It's a Draw!"
    } else if (playerChoise == "paper" && randomItem == "scissors") {
        result2.innerText = "Computer Wins!"
        computerScore.innerText++
    }
    result.innerText = `${playerChoise} vs ${randomItem}`
    resetScoreBtn.innerText = "Reset Score"
})

scissors.addEventListener('click', (e) => {
    const playerChoise = e.target.classList
    const choises = ["rock", "paper", "scissors"]
    const compChoise = Math.floor(Math.random() * choises.length)
    const randomItem = choises[compChoise]
    if (playerChoise == "scissors" && randomItem == "rock") {
        result2.innerText = "Computer Wins!"
        computerScore.innerText++
    } else if (playerChoise == "scissors" && randomItem == "paper") {
        result2.innerText = "You Win!"
        yourScore.innerText++
    } else if (playerChoise == "scissors" && randomItem == "scissors") {
        result2.innerText = "It's a Draw!"
    }
    result.innerText = `${playerChoise} vs ${randomItem}`
    resetScoreBtn.innerText = "Reset Score"
})
