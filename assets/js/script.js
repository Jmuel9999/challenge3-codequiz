//querySelector variables for DOM manipulation
var startBtn = document.getElementById("startquiz");
var prequizContainer = document.getElementById("prequiz");
var quizContainer = document.getElementById("quiz-container");
//var submitButton = document.getElementById("submit");
var resultsContainer = document.getElementById("results");

const randomQuestions, currentQuestionIndex;

startBtn.addEventListener("click", startQuiz);


//Question array
var quizQuestions = [
    {questionOne: "Commonly used data types DO NOT include:",
        answers: {1: "strings", 2: "booleans", 3: "alerts", 4: "numbers"},
            correctAnswer: "3"},
    {questionTwo: "The condition of an if/else statement is enclosed with ___________.",
        answers: {1: "quotes", 2: "curly brackets", 3: "parenthesis", 4: "square brackets"},
            correctAnswer: "3"},
    {questionThree: "Arrays in JavaScript can be used to store ____________.",
        answers: {1: "numbers and strings", 2: "other arrays", 3: "booleans", 4: "all of the above"},
            correctAnswer: "4"},
    {questionFour: "String values must be enclosed within _____________ when being assigned to variables.",
        answers: {1: "commas", 2: "curly brackets", 3: "quotes", 4: "parenthesis"},
            correctAnswer: "3"},
    {questionFive: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {1: "JavaScript", 2: "terminal/bash", 3: "for loops", 4: "console.log"},
            correctAnswer: "4"},   
];

function startQuiz(){
    console.log("started");
    startBtn.classList.add("hide");
    //shuffles question order
    randomQuestions = quizQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    quizContainer.classList.remove("hide");
    nextQuestion();
};

function nextQuestion(){
    showQuestion(randomQuestions[currentQuestionIndex])
};

function showQuestion(question){

};

function selectAnswer(){

};