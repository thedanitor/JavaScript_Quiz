# JavaScript_Quiz

I created a simple quiz to employ the DOM manipulation techniques I recently learned.

https://thedanitor.github.io/JavaScript_Quiz/

## Languages Used

Using Bootstrap as a starting point, I created the HTML to house the JavaScript.

CSS was used to style it a bit more.

JavaScript was the main language of project as it makes the page interactive. I created an array of questions and by manipulating the DOM was able to sequentially display each question object.

## Description

Upon loading the page shows a home screen to introduce the quiz as well as a Start button to begin the question sequence.

Once the Start button is pressed the home screen becomes hidden and the first of five questions appears. The answer options are displayed as buttons that, when clicked, will advance the user to the next question. A timer is also displayed which begins counting down from 75 seconds.

Each wrong answer deducts 10 seconds from the timer. The game is over once all five questions have been answered and the user's score is however many seconds are left on the clock. There is a game end screen to show the user their score and allow them to input their initials.

User's initials and scores are saved into local storage and displayed on the highscore screen at the end of the game. Clear button will clear the highscores.

*There are still a few bugs with the score and with highscore screen. Will continue debugging.

## Acknowledgement

Author Dan Weikart would like to thank everyone in his UW Coding Bootcamp class for helping improve his understanding of HTML, CSS, and especially JavaScript.

Special shoutout to tutor Namita Shenai, instructor John Young and TA's Abdul Aziz and Ben Vaagen.


