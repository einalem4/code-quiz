
var questionsEl = document.querySelector("#questions");
var landingPageEl = document.querySelector("#begin-quiz");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz-questions");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var listItem = document.querySelector("#list-item");
var rightWrongEl = document.querySelector("#right-wrong");
var endGame = document.querySelector("#end-game")
var viewScore = document.querySelector("#high-score")
var timer = document.querySelector("#timer");
var timeLeft = 50;
var currentQuestionIndex = 0;


//set of quiz questions
var quizQuestions = [{
    title: "Which of the following type of variable is visible everywhere in your JavaScript code?",
    choices: ["Global variable", "Local variable", "All of the above", "None of the above"],
    answer: "Global variable"
},
{
    title: "What are variables used for in JavaScript Programs?",
    choices: ["Varying randomly", "Causing high-school algebra flashbacks", "Storing numbers, dates, or other values", "None of the above"],
    answer: "Storing numbers, dates, or other values"
},
{
    title: " ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    choices: ["<BODY>", "<SCRIPT>", "<HEAD>", "<TITLE>"],
    answer: "<SCRIPT>"
},
{
    title: "What is the correct JavaScript syntax to write 'Hello World'?",
    choices: ["System.out.println('Hello World')", "document.write('Hello World')", "response.write('Hello World')", "println ('Hello World')"],
    answer: "document.write('Hello World')"
},
]

//hides list items when landing on the main page
listItem.style.display = "none";

//high score when landing on the main page
endGame.style.display = "none";

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft < 1) {
            timer.textContent = 0;
            highScore();
            clearInterval(timerInterval);
        };

        if (timeLeft === 0 || currentQuestionIndex === quizQuestions.length) {
            highScore()
            clearInterval(timerInterval);
        }
    }, 1000);
};
//start the quiz
function startQuiz() {
    count = 0;
    setTime();
    displayQuestion(count);

    //shows the li of questions when the button is pressed
    listItem.style.display = "block";
    // removes quiz intro once start button is pressed
    landingPageEl.style.display = "none";
};

//displays questions and choices
function displayQuestion() {

    questionsEl.textContent = quizQuestions[currentQuestionIndex].title
    answer1El.textContent = quizQuestions[currentQuestionIndex].choices[0];
    answer2El.textContent = quizQuestions[currentQuestionIndex].choices[1];
    answer3El.textContent = quizQuestions[currentQuestionIndex].choices[2];
    answer4El.textContent = quizQuestions[currentQuestionIndex].choices[3];
};

answer1El.addEventListener('click', function () {
    console.log(answer1El)
    checkAnswer(0);
});

answer2El.addEventListener('click', function () {
    console.log(answer2El)
    checkAnswer(1);
});

answer3El.addEventListener('click', function () {
    console.log(answer3El)
    checkAnswer(2);
});

answer4El.addEventListener('click', function () {
    console.log(answer4El)
    checkAnswer(3);
});

function checkAnswer(choiceIndex) {
    console.log(currentQuestionIndex);
    var currentQuestion = quizQuestions[currentQuestionIndex];
    var userAnswer = currentQuestion.choices[choiceIndex];
    var correctAnswer = quizQuestions[currentQuestionIndex].answer
    if (userAnswer === correctAnswer) {
        rightWrongEl.innerHTML = "Correct!";
        console.log(userAnswer);
    }
    else {
        rightWrongEl.innerHTML = "Wrong! :(";
    }

    if (currentQuestionIndex === 3) {
        highScore();
    }
    else {
        currentQuestionIndex++
        displayQuestion();
    }
};

function highScore() {
    console.log(endGame)

    endGame.style.display = "block";

    // removed quiz intro once star button is pressed
    landingPageEl.style.display = "none";
    // removed quiz intro once star button is pressed
    quizEl.style.display = "none";

}


//starts quiz
startEl.addEventListener("click", startQuiz);

//show highscore
viewScore.addEventListener("click", highScore);