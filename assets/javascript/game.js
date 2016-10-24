// wait for the document to be ready
$(document).ready(function () {
	// declare global numeric variables
	var wins, losses, score, rando, red, blue, yellow, green;
	
// introduce the app function: Crystals Collector
function gameOn() {
        // start a new game 
        //set score to zero (except wins and losses).
        score = 0; 
        //generate a random number and display it on the page
        //assign random values to four buttons
        rando = Math.floor(Math.random() * (120 - 1 + 1)) + 1;
        $("#rando").html(rando);
        red = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
        $("#red").html(rando);
        blue = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
        $("#blue").html(rando);
        yellow = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
        $("#yellow").html(rando);
        green = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
        $("#green").html(rando);
        // declare and initialize gametime toggle
        isGameOn = false;
        console.log(isGameOn);
        console.log(score);
        console.log("random = " + rando);
        console.log("red = " + red);
        console.log("blue = " + blue);
        console.log("green = " + green);
        console.log("yellow = " + yellow);
        // start a new game on the UI by emptying the display.
        $('#red, #blue, #yellow, #green, #score').empty();
    } /* END INITIALIZE GAME */
		// listen for clicks on the buttons

		// with each click add value to score

		// compare score to rando

		// if match then win, increment wins, and restart

		// if over then lose, increment losses, and restart

    // add a restart button and listen to restart manually
    $('.restart').on('click', function () {
        // call Game On so we can start again
        gameOn();
    }); /* END MANUAL RESTART */
    // call initializeGame so we can start again automatically
    gameOn();
});/* END DOC READY */