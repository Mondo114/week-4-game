$(document).ready(function () {

    // Set up global variables

    // initialize global variables

    // randomComputerNumber is the random digit computer will generage
    var bigCrystalNumber;
    var crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue;
    var wins = 0;
    var losses = 0;

    // userTallyScore is the ongoing sum of gem values user has picked
    var userTotalScore;

    // ================
    // Set up functions
    // ================

    // initializes the variables for each new round of the game
    function initializeVariables() {
        //  computer picks a number between 19-120
        bigCrystalNumber = (Math.floor(Math.random() * 102)) + 19;
        //  random gem values between 1-12
        crystalOneValue = (Math.floor(Math.random() * 12)) + 1;
        crystalTwoValue = (Math.floor(Math.random() * 12)) + 1;
        crystalThreeValue = (Math.floor(Math.random() * 12)) + 1;
        crystalFourValue = (Math.floor(Math.random() * 12)) + 1;
        // set initial value of user's ongoing crystal selections sum to 0
        userTotalScore = 0;
        // update the html to receive the values from the javascript
        $("#wins").html(wins);
        $("#losses").html(losses);
        $("#big-crystal-number").html(bigCrystalNumber);
        $("#total-collected").html(userTotalScore);
        consoleLogVariables();
    }

    // check if user has won or lost
    // increment wins / losses in either case
    // re-initialize variables for new round
    // if user hasn't won or lost then nothing happens
    function hasUserWonOrLost() {
        // check if user has won
        if (userTotalScore == bigCrystalNumber) {
            wins++;
            console.log("user won");
            initializeVariables();
        }

        // check if user has lost
        if (userTotalScore > bigCrystalNumber) {
            losses++;
            console.log("user lost");
            initializeVariables();
        }
    }

    // debugging functionality function
    function consoleLogVariables() {
        console.log("wins: " + wins);
        console.log("losses: " + losses);
        console.log("crystalOneValue: ", crystalOneValue + " crystalTwoValue: " + crystalTwoValue + " crystalThreeValue: " + crystalThreeValue + " crystalFourValue: " + crystalFourValue);
        console.log("bigCrystalNumber: " + bigCrystalNumber + " userTotalScore: " + userTotalScore);
        console.log("----------------------------------");

    }

    // main game functionality

    initializeVariables();

    // listen for clicks on any of the crystals by targeting the crystals class
    $(".small-crystal").on("click", function () {
        // each gem has a value attribute of gem1, gem2, gem3, or gem 4
        // use this attribute to identify which gem the user actually clicked
        var pressed = $(this).attr("value");
        console.log(pressed);
        // add the value of the gem to the user's ongoing score tally
        if (pressed == "crystal-1") {
            userTotalScore += crystalOneValue;
        } else if (pressed == "crystal-2") {
            userTotalScore += crystalTwoValue;
        } else if (pressed == "crystal-3") {
            userTotalScore += crystalThreeValue;
        } else if (pressed == "crystal-4") {
            userTotalScore += crystalFourValue;
        } else {
            console.log("error");
        }
        // then update the html for the user score
        $("#total-collected").html(userTotalScore);
        consoleLogVariables();
        // call the function to see if user has won or lost
        hasUserWonOrLost();
    });







});