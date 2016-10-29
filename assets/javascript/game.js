// wait for the document to be ready
$(document).ready(function () {
	// declare global numeric variables
	var score, rando, red, blue, yellow, green;
	var wins = 0;
    var losses = 0; 
// introduce the app function: Crystals Collector
function gameOn() {
        // start a new game 
        //set score to zero (except wins and losses).
        score = 0; 
        //generate a random number and display it on the page
        //assign random values to  buttons
        rando = Math.floor(Math.random() * 101) + 19;
        $("#rando").html(rando);
        red = Math.floor(Math.random() * 12) + 1;
        blue = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        green = Math.floor(Math.random() * 12) + 1;
        // declare and initialize gametime toggle
        isGameOn = true;
        console.log(isGameOn);
        console.log(score);
        console.log("random = " + rando);
        console.log("red = " + red);
        console.log("blue = " + blue);
        console.log("green = " + green);
        console.log("yellow = " + yellow);
        // start a new game on the UI by emptying the display.
        $('#score').html("0");
    } /* END GAME ON */
	// listen for clicks on the buttons
    $('.red').on('click', function(){
        // with each click add value of jewel to score
        score = score + red;
        console.log(score);
        // display the new score
        $('#score').html(score);
        // call a function compare the new score to the random number and pass the score to it
        eval(score);      
    })
    $('.blue').on('click', function(){
        score = score + blue;
        console.log(score);
        $('#score').html(score);
        eval(score);      
    })
    $('.yellow').on('click', function(){
        score = score + yellow;
        console.log(score);
        $('#score').html(score);
        eval(score);      
    })
    $('.green').on('click', function(){
        score = score + green
        console.log(score);
        $('#score').html(score);
        eval(score);      
    })
	// compare score to rando
    function eval(){
        if (score == rando){
            wins++;
            $('#wins').html(wins);
            gameOn();
            // celebrate();
            return;
        } else if (score >= rando) {
            losses++;
            $('#losses').html(losses);
            gameOn();
            // pwn();
            return;
        } else {
            return;
        }
    } /*END EVAL */

    // add a restart button and listen to restart manually
    $('.restart').on('click', function() {
        // call Game On so we can start again
        gameOn();
    }); /* END MANUAL RESTART */
    // call game on to start again automatically
    gameOn();
});/* END DOC READY */