var canvas, database;
var gameState = 0;
var playerCount;
var form1, player1, game1;
var allPlayers;

function setup() {
  createCanvas(400,400);
  database = firebase.database();

  game1 = new game();
  game1.getState()
  game1.start();

}

function draw() {
    if(playerCount == 4) {
      game1.update(1)
    }

    if(gameState == 1) {
      game1.play();
    }
}

