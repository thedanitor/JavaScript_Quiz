var startButton = document.getElementById("start-quiz");
var start = document.getElementById("start-screen");
var firstQ = document.getElementById("firstQuestion");
var currQuest = document.getElementById("question");
var choiceEl = document.getElementById("questionChoice");
var highScoreScreen = document.getElementById("highscore-screen");
var hiScoreList = document.getElementById("highscore-list")
var time;
var questionIndex = 0;
var score = 0;
// need to pull from local storage
var highscore = 0;


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

function timer() {
    start.setAttribute("class", "hide");
    firstQ.removeAttribute("class");
    time = 75;
    var timerEl = document.querySelector(".time");
    timerEl.textContent = "Time: " + time;
    countdown = setInterval(function () {
        time--;
        timerEl.textContent = "Time: " + time;
    }, 1000)
    renderQuestion(questionList[questionIndex]);
}

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
            } if (questionIndex < questionList.length-1) {
                questionIndex++;
            renderQuestion(questionList[questionIndex]);
            } else {
                endScore();
            }
    }
});

function endScore () {
    score = time;
    clearInterval(countdown);
    questionChoice.innerHTML = ""
    currQuest.innerHTML = "";
    var scoreScreen = document.getElementById("score-screen");
    scoreScreen.setAttribute("class", "unhide")
    var scoreText = document.getElementById("score-text");
    scoreText.textContent = "Your final score is " + score + ".";
} 

function highscore () {
    var scoreScreen = document.getElementById("score-screen");
    scoreScreen.setAttribute("class", "hide")
    var highscoreScreen = document.getElementById("highscore-screen");
    highscoreScreen.setAttribute("class", "unhide")
    scoreName = document.createElement("li");
    scoreName.textContent = "New Score: " + score;
    hiScoreList.append(scoreName);
}

startButton.addEventListener("click", timer);
highScoreScreen.addEventListener("click", function(event){
    event.preventDefault();
    highscore();
});