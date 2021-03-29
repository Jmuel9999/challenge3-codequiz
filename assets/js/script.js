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
        } 
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

//timer code start

var timeIntervalUp;
var secondsDown = 60;
function startTimer(){
    timeIntervalUp = setInterval(function(){countTimer()}, 1000);
};
function countTimer() {
    document.getElementById("timer").innerHTML = "Time Remaining: " + secondsDown;
    secondsDown--;
        if (secondsDown <= 0) {
            clearInterval(timeIntervalUp);
            alert("Time's Up!")
            endTimer();
            XMLHttpRequestUpload();
            endQuiz();
        };
        // document.getElementById("incorrect").addEventListener("click", function() {
        //     secondsDown -= 5;
        //     document.getElementById("timer").innerHTML = "00: " +secondsDown;
        // });
        // startTimer();
};

function endQuiz() {
    window.alert("The quiz is over, let's see how you did!");
    var highScore = localStorage.getItem("highscore") || 0;
    
};
