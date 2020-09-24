var canvas, backgroundImage;
var cars,car1,car2,car3,car4;
var car1_Image,car2_Image,car3_Image,car4_Image;

var ground_Image;
var track;
var gameState = 0;
var playerCount;
var allPlayers;
var distance=0;

var database;

var form, player, game;
function preload(){
  car1_Image=loadImage("images/car1.png");
  car2_Image=loadImage("images/car2.png");
  car3_Image=loadImage("images/car3.png");
  car4_Image=loadImage("images/car4.png");

  track=loadImage("images/track.jpg");

  ground_Image=loadImage("images/ground.png");

}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }

}
