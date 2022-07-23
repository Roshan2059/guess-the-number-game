'use strict';
let score = 20;
let highscore = 0;
let actualNum = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = actualNum;
document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    // document.write(`Value: ${guess}`)

    if (!guess)
        document.querySelector('.message').textContent = 'Enter a number';
    else if (guess < 1 || guess > 20)
        document.querySelector('.message').textContent = 'The number should be between 1 and 20';
    else if (guess == actualNum) {
        document.querySelector('.number').textContent = actualNum;
        document.querySelector('.message').textContent = 'Correct number';
        document.querySelector('body').style.backgroundColor = 'green';

        if(score > highscore){
            highscore = score;
             document.querySelector('.highscore').textContent = highscore;
        }
       
    }
    else if (guess > actualNum) {
        document.querySelector('.message').textContent = 'Go a little lower';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (guess < actualNum) {
        document.querySelector('.message').textContent = 'Go a little higher';
        score--;
        document.querySelector('.score').textContent = score;
    }

});

document.querySelector('.again').addEventListener('click', function() {
    actualNum = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
}); 