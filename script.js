var startButton = document.getElementById("start-quiz");
var cardBodyEl = document.querySelector(".card-body");
var start = document.getElementById("start-screen");
var firstQ = document.getElementById("firstQuestion");
var q1 = document.getElementById("question");
var choiceEl = document.getElementById("questionChoice");

var questionList = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      }
]
var questionIndex = 0;

function populateQuestion () {
    var currentQuestion = questionList[questionIndex];
    console.log(currentQuestion);
    
    q1.textContent = currentQuestion.title;
    // choice.innerHTML = "";


    
    currentQuestion.choices.forEach(function(choice,i){
        //create button
        var qChoice = document.createElement("button");
        // set value of button to choice
        qChoice.setAttribute("value", choice);
        qChoice.setAttribute("class", "btn");
        // set text of button to current choice
        qChoice.textContent = choice;
        console.log(qChoice);
        // displaying on HTML page
        choiceEl.appendChild(qChoice);
       
    })
}

// create countdown timer function
function timer () {

    start.setAttribute("class", "hide");

    firstQ.removeAttribute("class");
    // firstQ.textContent = "hi";
    // start time at 75 seconds
    var time = 10;
    // assign timer element to <div class="time">
    var timerEl = document.querySelector(".time");
    // set the text content to "Time: " and display the seconds remaining
    timerEl.textContent = "Time: " + time;
    // countdown function
    var countdown = setInterval(function() {
        // decrease time var by one
        time--;

        timerEl.textContent = "Time: " + time;
        // when time reaches zero
        if (time === 0) {
            // change text in timer element to nothing
            timerEl.textContent = "";
            // clear countdown interval
            clearInterval(countdown);
            // begin score function
            // score();
        }
        // set interval at 1000 ms which = 1 second
    }, 1000)

    populateQuestion();
}
// call timer function

// startButton.onclick = timer;
startButton.addEventListener("click", timer);


/// Can change to next questions by selecting card-body class and changing innerHTML.
