const myform = document.querySelector(".form");
const lastResult = document.querySelector(".lastResult");
const result = document.querySelector(".lowOrHi");
const guesses = document.querySelector(".guesses");

let previousGuesses = [];
let randomNo = Math.floor(Math.random() * 100) + 1;
let attempts = 1;

myform.addEventListener("submit", (e) => {
    e.preventDefault();

    if (attempts > 10) return;

    const userInput = Number(
        document.getElementById("guessField").value
    );

    previousGuesses.push(userInput);

    if (userInput === randomNo) {
        result.textContent =
            `Congratulations! You guessed the number in ${attempts} attempts.`;
        return;
    }

    if (attempts === 10) {
        result.textContent =
            `Game Over! The number was ${randomNo}.`;
        return;
    }

    if (userInput < randomNo) {
        result.textContent =
            `Wrong guess! Attempt ${attempts}. Your guess is too low.`;
    } else {
        result.textContent =
            `Wrong guess! Attempt ${attempts}. Your guess is too high.`;
    }

    lastResult.textContent = `Attempts remaining: ${10 - attempts}`;
    guesses.textContent = previousGuesses.join(", ");
    attempts++;
});