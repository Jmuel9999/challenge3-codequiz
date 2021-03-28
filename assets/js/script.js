//querySelector variables for DOM manipulation
var startBtn = document.querySelector("startquiz");
var pregameContainer = document.querySelector("pregame")
var quizContainer = document.querySelector("quiz");
var submitButton = document.querySelector("submit");
var resultsContainer = document.querySelector("results");


//Question array
var quizQuestions = [
    {questionOne: "Commonly used data types DO NOT include:",
        answer: {1: "strings", 2: "booleans", 3: "alerts", 4: "numbers"},
            correctAnswer: "3"},
    {questionTwo: "The condition of an if/else statement is enclosed with ___________.",
        answer: {1: "quotes", 2: "curly brackets", 3: "parenthesis", 4: "square brackets"},
            correctAnswer: "3"},
    {questionThree: "Arrays in JavaScript can be used to store ____________.",
        answer: {1: "numbers and strings", 2: "other arrays", 3: "booleans", 4: "all of the above"},
            correctAnswer: "4"},
    {questionFour: "String values must be enclosed within _____________ when being assigned to variables.",
        answer: {1: "commas", 2: "curly brackets", 3: "quotes", 4: "parenthesis"},
            correctAnswer: "3"},
    {questionFive: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: {1: "JavaScript", 2: "terminal/bash", 3: "for loops", 4: "console.log"},
            correctAnswer: "4"},   
];

//array object


//start game function
//document.getElementById(startQuiz);
//debugger;
function startQuiz(){
    
    
    var arrayOutput = [];
    //for ()
    // for (i = 0; i < quizQuestions.length; i++) {
    //    if (quizQuestions.questionOne !== 3)
    //     alert("Wrong!");
        
    // }
};

//start button
//document.getElementById(startQuiz);
startBtn.onclick = startQuiz;