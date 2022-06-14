var canvas;
var backgroundImage;
var bgImg;
var database;
var myform, myplayer, mygame

var myplayerCount, myGamestate
var car1,car2,car1Image,car2Image
var cars


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image = loadImage("./assets/car1.png")
  car2Image = loadImage("./assets/car2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  mygame = new Game()
  mygame.start()
  mygame.getState()
  console.log(myGamestate)


}



function draw() {
  background(backgroundImage);
  if (myplayerCount === 2) {
    mygame.updateState(1)
  }

  if(myGamestate === 1){
    mygame.play()

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
