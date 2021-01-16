
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
var countDown = 78;
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
document.getElementById('list-item').style.display = "none";

//start the quiz
function startQuiz() {
    count = 0;
    displayQuestion(count);
    //shows the li of questions when the button is pressed
    document.getElementById('list-item').style.display = "block";


    // removed quiz intro once star button is pressed
    document.getElementById('begin-quiz').style.display = "none";

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
    var currentQuestion = quizQuestions[currentQuestionIndex];
    var correctAnswer = quizQuestions[currentQuestionIndex].answer
    var userAnswer = currentQuestion.choices[0];
    if (userAnswer === correctAnswer) {
        console.log(userAnswer);
        currentQuestionIndex++
        displayQuestion();
    }
    else {
        console.log("Wrong ANSWER DUMMY");
    }
});






//starts quiz
startEl.addEventListener("click", startQuiz);

