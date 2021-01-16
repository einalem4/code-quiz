
var questionsEl = document.querySelector("#questions");
var landingPageEl = document.querySelector ("#begin-quiz");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz-questions")
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");


//set of quiz questions
var quizQuestions = [{
    title: "Which of the following type of variable is visible everywhere in your JavaScript code?",
    choices: ["Global variable", "Local variable", "All of the above", "None of the above"],
    answer: "Global Variable"
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

//start the quiz
function startQuiz() {
    count = 0;
    displayQuestion(count);

    document.getElementById('begin-quiz').remove();
};


function displayQuestion() {
    for (var i = 0; i < quizQuestions.length; i++) {
        questionsEl.textContent = quizQuestions[i].title;
        answer1El.textContent = quizQuestions[i].choices[0];
        answer2El.textContent = quizQuestions[i].choices[1];
        answer3El.textContent = quizQuestions[i].choices[2];
        answer4El.textContent = quizQuestions[i].choices[3];
    }
    console.log(displayQuestion);
};

startEl.addEventListener("click", startQuiz);

