'use strict';

//console.log(document.querySelector('.message'))
//console.log(document.querySelector('.message').textContent)
//document.querySelector('body').style.backgroundColor = '#60b347'

const number = Math.trunc(Math.random()*21)
let score = 10;

document.querySelector('.check').addEventListener('click', function() {
    //console.log(document.querySelector(".guess").value)
    const guess = Number(document.querySelector(".guess").value)

    if (!guess) {
        document.querySelector(".message").textContent = "The inserted value is invalid!"
    } else if (guess === number) {
        document.querySelector(".message").textContent = "Correct!"
    } else {
        document.querySelector(".message").textContent = "Wrong guess"
        score--
        document.querySelector(".score").textContent = score
    }
})
