var startButton = document.getElementById("start-quiz");
var cardBodyEl = document.querySelector(".card-body");
var cardTitleEl = document.querySelector(".card-title");
var cardTextEl = document.querySelector(".card-text");
var start = document.getElementById("start-screen");
var firstQ = document.getElementById("firstQuestion");
var currQuest = document.getElementById("question");
var choiceEl = document.getElementById("questionChoice");
var time = 75;
var questionIndex = 0;
var score = 0;
// need to pull from local storage
var highscore = 0;
// var currentTime = time;

var questionList = [
    //question 1
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    //question 2
    {
        title: "The condition of an if / else statement is enclosed within ___.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "2. curly brackets"
    },
    //question 3
    {
        title: "Arrays in JavaScript can be used to store ___.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    //question 4
    {
        title: "String values must be enclosed with ___ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes"
    },
    //question 5
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }
]

function renderQuestion(currentQuestion) {
  
    currQuest.textContent = currentQuestion.title;

    currentQuestion.choices.forEach(function (choice, i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("value", choice);
        choiceButton.setAttribute("class", "btn choicebtn");
        choiceButton.textContent = choice;
        choiceEl.appendChild(choiceButton);
    });
}

choiceEl.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("button") === true) {
        console.log(element.textContent);
        console.log(questionList[questionIndex].answer)
        questionChoice.innerHTML = "";
            if (element.textContent !== questionList[questionIndex].answer){
                time = time - 10;
            }
            if (questionIndex < questionList.length-1) {
                questionIndex++;
            renderQuestion(questionList[questionIndex]);
        }
    }
});

function timer() {
    start.setAttribute("class", "hide");
    firstQ.removeAttribute("class");
    time = 5;
    var timerEl = document.querySelector(".time");
    timerEl.textContent = "Time: " + time;
    var countdown = setInterval(function () {
        time--;
        timerEl.textContent = "Time: " + time;
        if (time <= 0) {
            timerEl.textContent = "Time: 0";
            clearInterval(countdown);
            endScore();
        }
    }, 1000)
    renderQuestion(questionList[questionIndex]);
}

startButton.addEventListener("click", timer);


function endScore () {
    questionChoice.innerHTML = ""
    currQuest.innerHTML = "";
    var scoreScreen = document.createElement("div");
    questionChoice.appendChild(scoreScreen);
    var scoreTitle = document.querySelector(".card-title");
    scoreTitle.textContent = "All done!";
    //2. replace .card-text with "Your final score is + time"
    var scoreText = document.querySelector(".card-text");
    scoreText.textContent = "Your final score is " + time + ".";
    var initialsEl = document.createElement("p");
    cardTextEl.appendChild(initialsEl);
    initialsEl.textContent = "Enter your initials :";
    // var initials = 
    // initials.textContent = "Enter your initials";
    //3. add form to enter initials
    // var initials = cardTitleEl.createElement("form"); 
    //4. add submit button that takes us to highscrore screen
    
    scoreScreen.appendChild(scoreTitle);
    scoreScreen.appendChild(scoreText);
    // scoreScreen.appendChild(initials);


} 