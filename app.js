// JavaScript logic for the rock-paper-scissors game

// Function to get computer choice
function getComputerChoice() {
    const choices = ['グー', 'パー', 'チョキ'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "あいこです！";
    } else if (
        (userChoice === 'グー' && computerChoice === 'チョキ') ||
        (userChoice === 'パー' && computerChoice === 'グー') ||
        (userChoice === 'チョキ' && computerChoice === 'パー')
    ) {
        return "あなたの勝ち！";
    } else {
        return "あなたの負け！";
    }
}

// Function to play the game
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateDisplay(userChoice, computerChoice, result);
}

// Function to update the display with results
function updateDisplay(userChoice, computerChoice, result) {
    const resultDisplay = document.getElementById('resultText');
    resultDisplay.innerText = `あなた: ${userChoice}　コンピュータ: ${computerChoice}\n${result}`;
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playGame('グー'));
document.getElementById('paper').addEventListener('click', () => playGame('パー'));
document.getElementById('scissors').addEventListener('click', () => playGame('チョキ'));