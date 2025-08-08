const questions = [
    {
        question : "Which is the best pogramimg language in 2025?",
        answer : [
            {text : "Javascript", correct : false},
            {text : "Java", correct : false},
            {text : "Python", correct : true},
            {text : "C++", correct : false},
        ]
    },
     {
        question : "Which is the best stake in web development?",
        answer : [
            {text : "MERN", correct : true},
            {text : "MEAN", correct : false},
            {text : "PEAN", correct : false},
            {text : "Wordpres", correct : false},
        ]
    },
     {
        question : "Which is the world best mobile gameplay?",
        answer : [
            {text : "Free fire", correct : false},
            {text : "PUBG", correct : true},
            {text : "Call of Dute", correct : false},
            {text : "Candy Crash", correct : false},
        ]
    },
     {
        question : "Whish is the biggest company in the world?",
        answer : [
            {text : "Meta", correct : false},
            {text : "Microsoft", correct : false},
            {text : "Nvidea", correct : false},
            {text : "Apple", correct : true},
        ]
    },
     {
        question : "Which is the best device for gaming?",
        answer : [
            {text : "Mobile", correct : false},
            {text : "PS4", correct : true},
            {text : "Laptop", correct : false},
            {text : "PC", correct : false},
        ]
    },
];

const questionElemnt = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

// Function 01 = startQuiz()
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); // call
};


// Function 02 = showQuestion()
function showQuestion(){
    resetState(); // call
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElemnt.innerHTML = questionNo + ". " + currentQuestion.question; 

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}


// Function 03 = resetState().
function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    };
};


// Function 04 = selectAnswer().
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    };
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};



// Function 05 = showScore.
function showScore() {
    resetState(); // call
    questionElemnt.innerHTML = `You scroed ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


// Function 06 = handleNextbutton().
function handleNextbutton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion(); // call
    } else {
        showScore(); // call
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextbutton(); // call
    }else {
        startQuiz(); // call
    }
})

startQuiz(); // call