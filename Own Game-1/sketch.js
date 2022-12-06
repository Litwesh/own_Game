var bg,Spaceship1
var canvas
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image;
var  gameState;
var fuels, powerCoins, obstacles;
var blastImage;
var life,fuelcount,score;
function preload(){
bg =loadImage("bg.png");
Spaceship1=loadImage("Ss1.png");

fuelImage = loadImage("fuel.png");
powerCoinImage = loadImage("goldCoin.png");
obstacle1Image = loadImage("obstacle1.png");
lifeImage = loadImage("life.png");
blastImage=loadImage("blast.png")

}
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    Spaceship=createSprite(170,350,70,50);
    Spaceship.addImage(Spaceship1);
    Spaceship.scale=0.3;
    Spaceship.x=350;
    Spaceship.velocityX=-3;
    bk=createSprite();
    bk.addImage(bg);
    bk.x=bg.width/2;
    bk.velocityX=-3;
    bk.width=windowWidth;
    bk.height=windowHeight;
  }
function draw(){
  background(bg)
  
  
  
if(bk.x<0){
      bk.x=bg.width/2;
    }
    spawnObstacles()
    spawnfuels()
    spawnPowerCoins()
    if(keyDown("UP ARROW")){
      Spaceship.y=Spaceship.y+10;
    }
    if(keyDown("DOWN ARROW")){
      Spaceship.y=Spaceship.y-10;
    }
      if (gameState === 1) {
        game.play();
      }
    
      if (gameState === 2) {
       
      }
      drawSprites();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function spawnObstacles(){
    if(frameCount%30===0){
      var obstacle = createSprite(600,100,30,30)
      obstacle.y=Math.round(random(0,100));
      obstacle.velocityX=-8
      obstacle.addImage(obstacle1Image)
      obstacle.lifeTime=300;
      obstacle.scale=0.3;
    }
  }
  function spawnfuels(){
    if(frameCount%30===0){
      var fuel = createSprite(1350,0,30,30)
      fuel.y=Math.round(random(0,100));
      fuel.velocityX=-8
      fuel.addImage(fuelImage)
      fuel.lifeTime=300;
      fuel.scale=0.03;
    }
  }
  function spawnPowerCoins(){
    if(frameCount%30===0){
      var powerCoin = createSprite(100,30,30,30)
      powerCoin.y=Math.round(random(0,100));
      powerCoin.velocityX=-8
      powerCoin.addImage(powerCoinImage)
      powerCoin.lifeTime=300;
      powerCoin.scale=0.1;
    }
  }