//querySelector variables for DOM manipulation
var startBtn = document.getElementById("startbtn");
var prequizContainer = document.getElementById("prequiz");
var quizContainer = document.getElementById("quiz-container");
var resultsContainer = document.getElementById("results");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answerbtns");
// var answerA = document.getElementById("a")
// var answerA = document.getElementById("b")
// var answerA = document.getElementById("c")
// var answerA = document.getElementById("d")
//var questionCont = document.getElementById("question-container")
//var btnHide = document.getElementById("ansbtn");
var nextButton = document.getElementById("nextbtn");
var timer = document.getElementById("timer");

let randomQuestions, currentQuestionIndex;

//starts quiz and timer
startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    qIndex++
    nextQuestion();
});


// //Question array
// var quizQuestions = [
//     {questionOne: "Commonly used data types DO NOT include:",
//         answers: {1: "strings", 2: "booleans", 3: "alerts", 4: "numbers"},
//             correctAnswer: "3"},
//     {questionTwo: "The condition of an if/else statement is enclosed with ___________.",
//         answers: {1: "quotes", 2: "curly brackets", 3: "parenthesis", 4: "square brackets"},
//             correctAnswer: "3"},
//     {questionThree: "Arrays in JavaScript can be used to store ____________.",
//         answers: {1: "numbers and strings", 2: "other arrays", 3: "booleans", 4: "all of the above"},
//             correctAnswer: "4"},
//     {questionFour: "String values must be enclosed within _____________ when being assigned to variables.",
//         answers: {1: "commas", 2: "curly brackets", 3: "quotes", 4: "parenthesis"},
//             correctAnswer: "3"},
//     {questionFive: "A very useful tool used during development and debugging for printing content to the debugger is:",
//         answers: {1: "JavaScript", 2: "terminal/bash", 3: "for loops", 4: "console.log"},
//             correctAnswer: "4"},   
// ];

var quizQuestions = [
    { question: "Commonly used data types DO NOT include:",
      answers: [{ text: "strings", correct: false}, {text:"booleans", correct: false }, 
      {text: "alerts", correct: true}, {text: "numbers", correct: false}]
    },
    { question: "The condition of an if/else statement is enclosed with ___________.",
    answers: [{ text: "quotes", correct: false}, {text:"curly brackets", correct: false },
      {text: "parenthesis", correct: true}, {text: "square brackets", correct: false}]
    },
    { question: "Arrays in JavaScript can be used to store ____________.",
    answers: [{ text: "numbers and strings", correct: false}, {text:"other arrays", correct: false }, 
    {text: "booleans", correct: false}, {text: "all of the above", correct: true}]
    },
    { question: "String values must be enclosed within ____________ when being assigned to variables.",
    answers: [{ text: "commas", correct: false}, {text:"curly brackets", correct: false }, 
    {text: "quotes", correct: true}, {text: "parenthesis", correct: false}]
    },
    { question: "On a scale of one to four, my stress level with this course is: ",
    answers: [{ text: "1", correct: false}, {text:"2", correct: false }, 
    {text: "3", correct: false}, {text: "4573.6", correct: true}]
    },
];

function startQuiz(){
    console.log("started");
    startBtn.classList.add("hide");
    //shuffles question order
    randomQuestions = quizQuestions.sort(() => Math.random() - .5)
    qIndex = 0;
    quizContainer.classList.remove("hide");
    answerEl.classList.remove("hide");
    nextQuestion();
};

function nextQuestion(){
    //calls new questiong format for each question
    resetQuestion()
    cueQuestion(randomQuestions[qIndex])
};

function cueQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener("click", pickAnswer);
        answerEl.appendChild(button);
    });
};

function resetQuestion(){
    nextbtn.classList.add("hide")
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    };
};

function pickAnswer(event){
    var pickBtn = event.target
    var correct = pickBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if (randomQuestions.length > qIndex + 1) {
        nextbtn.classList.remove("hide")
    } else{
        startBtn.innerText = "Restart"
        startBtn.classList.remove("hide")
    };
};
//colors the buttons according to getting them right or wrong
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("incorrect")
    };
};

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("incorrect")
};

// function wrongAnswer (){

// }

//timer code start
var timeIntervalUp;
var secondsDown = 60;
function startTimer(){
    timeIntervalUp = setInterval(function(){countTimer()}, 1000);
};
function countTimer() {
    document.getElementById("timer").innerHTML = "Time Remaining: " + secondsDown;
    secondsDown--;
        if (secondsDown === 0) {
            clearInterval(timeIntervalUp);
            endTimer();
            XMLHttpRequestUpload();
        };
};

// var count = 5;
// var counter = setInterval(quizTimer, 1000);
// function quizTimer(){
//     document.getElementById("timer").innerHTML = count + " seconds left!";
//     count--;
//     //clearInterval(counter);
//     if (count === 0){
//         clearInterval(counter);
//         alert("Game Over!")
//     }
// };