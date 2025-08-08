const userInput = document.querySelector(".user-input");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const startBtn = document.querySelector(".start-btn");
const textBar = document.querySelector(".text");
const userGues = document.querySelector(".userGuess");

(function() {
 
    
    let randomNumber = Math.round(Math.random() * 100);
    let userNumberArray = [];
    let guess = 0;

    form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userInput.disabled) return;
    let userInputValie = parseInt(userInput.value);
    if (userInputValie > randomNumber) {
        textBar.innerText = "Too High";
        userInput.focus();  
    } else if (userInputValie < randomNumber) {
        textBar.innerText = "Too Low";
        userInput.focus();  
    } else {
        textBar.innerText = "🥳 Winner Winner Chicken Dinner!! 🍗🎉" 
        userInput.disabled = true;
        startBtn.disabled = false;
        submitBtn.disabled = true;
        userInput.value = "";
        return;    
    };
    guess++;
    form.reset();
    userNumberArray.push(userInputValie);
    userGues.innerText = 'Your Guess: ' + userNumberArray.join(", ");

    if (guess === 10) {
        textBar.innerText = `You Lost 😢  The Number was ${randomNumber}`;
        userGues.innerText = "";
        userInput.disabled = true;
        submitBtn.disabled = true;
        startBtn.disabled = false;
        startBtn.innerHTML = "Try again";
        guess = 0;
    };
});

    startBtn.addEventListener("click", () => {
    randomNumber = Math.round(Math.random() * 100);
    userInput.disabled = false;
    submitBtn.disabled = false;
    startBtn.disabled = true;
    userInput.value = "";
    textBar.innerText = "";
    userGues.innerText = "";
    userNumberArray = [];
    userInput.focus();
    startBtn.innerHTML = "Start game";
    guess = 0; 
});
    
})();