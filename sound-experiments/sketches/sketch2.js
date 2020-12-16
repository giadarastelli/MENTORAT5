// audio track on click 

var song;

function setup() {
    createCanvas(400, 400);
    song = loadSound("water effect echo.mp3");

}

// function mouseClicked() {
//     song.play();
// }

function touchStarted() {
    song.play();
}

function draw() {
    background(50);
}