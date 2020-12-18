// MAKE THIS MORE EFFICENT, BECAUSE IT'S NOT!!!

//Graphics Libary
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;

let start = -1;
let skip = 34;
let x = 0;
let story = [
    { limit: 34, skip: 32, begin: 0, choice1: 1, choice2: 4 }, // Chapter 1
    { limit: 135, skip: 135, begin: 37, choice1: 2, choice2: 3 }, // Chapter 2a
    { limit: 251, skip: 249, begin: 139, choice1: 0, choice2: 0}, // Ending 1a
    { limit: 481, skip: 479, begin: 255, choice1: 0, choice2: 0}, // Ending 1b
    { limit: 643, skip: 641, begin: 484, choice1: 5, choice2: 6 }, // Chapter 2b
    { limit: 792, skip: 780, begin: 646, choice1: 0, choice2: 0}, // Ending 2a
    { limit: 916, skip: 914, begin: 795, choice1: 0, choice2: 0}  // Ending 2b
];
let message = ["Click to begin the story"];
let key = false;

// CANVAS EVENT LISTENER
cnv.addEventListener("click", loadCanvas);
document.addEventListener("keydown", keyDownHandler);

// LOAD TEXT AND SCENARIO ON CLICK
function loadCanvas() {

    // continue story or stop
    continueStory(story);

    // Set up array based on start#
    array = scenario(start);

    // Get Message from txt file
    message = txt[start];
    
    // Get Background from array
    backdrop = array[0];

    // Get character from array
    person = array[1];

    // Draw the array
    mainDraw(person, backdrop);
}

function continueStory() {

    // If the start# is bellow the limit, key is false. Otherwise, key is true.
    if (start < story[x].limit) {
        start++;
        skip = story[x].skip;
        key = false;
    } else {
        key = true;
    }
}

function keyDownHandler(event) {

    // if the key is true, press a or b to decide which route to go down.
    if (key) {
        if (event.keyCode == 65) {
            x = story[x].choice1;
            start = story[x].begin;
        } else if (event.keyCode == 66) {
            x = story[x].choice2;
            start = story[x].begin;
        }

        message = "Your decision is made!";

        mainDraw();
    }
}