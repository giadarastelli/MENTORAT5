//audio track when page is loaded 
var song;

function setup() {
    createCanvas(400, 400);
    song = loadSound("Psychic.mp3", loaded);

}

function loaded() {
    song.play();
}

function draw() {
    background(50);
}