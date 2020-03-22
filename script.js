// create countdown timer function
function timer () {
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
            score();
        }
        // set interval at 1000 ms which = 1 second
    }, 1000)
}
// call timer function
timer();


