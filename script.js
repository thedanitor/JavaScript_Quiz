var startButton = document.getElementById("start-quiz");
var cardBodyEl = document.querySelector(".card-body");
var start = document.getElementById("start-screen");
var firstQ = document.getElementById("firstQuestion");
var currQuest = document.getElementById("question");
var choiceEl = document.getElementById("questionChoice");
var time = 75;
var questionIndex = 0;
var score = 0;
var highscore = 0;

var questionList = [
    //question 1
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "1. alerts"
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


function populateQuestion () {
    // currentQuestion gets object of questionList array (starting at index [0]) 
    var currentQuestion = questionList[questionIndex];
    // set textContent of <h3> with ID question to title of currentQuestion
    currQuest.textContent = currentQuestion.title;
    // forEach loop which takes input of choice and index number
    currentQuestion.choices.forEach(function(choice,i){
        //create button
        var choiceButton = document.createElement("button");
        // set value of button to choice
        choiceButton.setAttribute("value", choice);
        // set class of button to apply CSS styles
        choiceButton.setAttribute("class", "btn choicebtn");
        // set text of button to current choice
        choiceButton.textContent = choice;
        // displaying on HTML page
        choiceEl.appendChild(choiceButton);       
    });
    // correct gets the answer object from each question
    // var correct = questionList[questionIndex].answer;
    //     console.log(correct);

    //     // want to set attribute of correct response to true...
    //     // how do I 
    //     console.log(questionList[questionIndex].choices[i]);
    // if (questionList[questionIndex].choices[i] === correct) {
    //     choiceButton.setAttribute("true", "true");
    // }
} 
// when element inside choiceEl is clicked
choiceEl.addEventListener("click", function(event){
    var element = event.target;
    // if element is button
    if (element.matches("button") === true) {
        //run scoring function

        //scoring();
        //update current question by increasing questionIndex by one
        questionIndex++;
        //remove everything in innerHTML to make room for new question
        questionChoice.innerHTML = "";
        if (questionIndex < questionList.length){
            // if there are still more questions, populate questions
            populateQuestion();
            // else, go to end score
        // } else {
            // endScore();

        }
        
    }

});

// function scoring () {

// need to check if choices and answer are the same
// need to look at text in specific button clicked

//1. listen for button click
//2. figure out which button clicked
//3. get text of button
//4. check if text of button matches answer
//5. if does not match: time = time -10;


// // when element inside choiceEl is clicked
// choiceEl.addEventListener("click", function(event){
//     var element = event.target;
//     // if element is button
//     if (element.matches("button") === true) {


// }

// function endScore () {
    //1. replace .card-title text with "All done!"
    //2. replace .card-text with "Your final score is + time"
    //3. add form to enter initials
    //4. add submit button that takes us to highscrore screen

// }


// create countdown timer function
function timer () {

    start.setAttribute("class", "hide");

    firstQ.removeAttribute("class");
    // start time at 75 seconds
    time = 75;
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
            // change text in timer element to 0
            timerEl.textContent = "Time: 0";
            // clear countdown interval
            clearInterval(countdown);
            // begin endScore function
            // endScore();
        }
        // set interval at 1000 ms which = 1 second
    }, 1000)

    populateQuestion();
}
// call timer function

// startButton.onclick = timer;
startButton.addEventListener("click", timer);


/// Can change to next questions by selecting card-body class and changing innerHTML.
