'use strict';

let score = 20;
let highscore = 0;
let actualNum = Math.trunc(Math.random() * 20) + 1;

const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const guessElement = document.querySelector('.guess');

function displayMessage(message) {
    messageElement.textContent = message;
}

function displayScore(score) {
    scoreElement.textContent = score;
}

function generateRandomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

function resetGame() {
    actualNum = generateRandomNumber();
    score = 20;
    displayScore(score);
    guessElement.value = '';
    numberElement.textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
}

function checkGuess() {
    const guess = Number(guessElement.value);

    if (guess > 20 || guess < 1) {
        displayMessage('The number should be between 1 and 20');
    } else if (!guess) {
        displayMessage('Enter a number');
    } else if (guess === actualNum) {
        numberElement.textContent = actualNum;
        displayMessage('Correct number');
        document.querySelector('body').style.backgroundColor = 'green';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess > actualNum) {
        displayMessage('Go a little lower');
        score--;
        displayScore(score);
    } else if (guess < actualNum) {
        displayMessage('Go a little higher');
        score--;
        displayScore(score);
    }
}

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', resetGame);
