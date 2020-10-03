var player, ground,backgr;
var obstacleGroup,bananaGroup;

var player_running,bananaImage,obstacleImage,backImg;
var groundImg,gameOver;
var score = 0;

function preload(){
backImg = loadImage("jungle2.jpg")
 player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImage = loadImage("Banana.png");
obstacleImage = loadImage("stone.png");  
}



function setup() {
  createCanvas(400, 400);
 
backgr = createSprite();
backgr.addImage("backgr",backImg);
backgr.velocityX = -4;
backgr.x = backgr.width/2;  
  
player = createSprite(100,340,20,50);
player.addAnimation("running",player_running);
player.scale=0.1;

  
 ground = createSprite(400,350,800,10);
ground.velocityX=-4;
ground.x = ground.width/2;


 obstacleGroup = createGroup();
 bananaGroup = createGroup();


ground.visible = false;  
}

function draw() {
  
 
  
if(keyDown("space")&& player.y>=314.3){
  player.velocityY=-15;
}

player.velocityY= player.velocityY+0.5;


if(ground.x < 0){
ground.x = ground.width/2;  
}  
  
if(backgr.x < 0){
backgr.x = backgr.width/2;  
}
  
player.collide(ground);  
  
if(bananaGroup.isTouching(player)){
   
score = score+2;
bananaGroup.destroyEach();   
   
   }  
  
switch(score) {
  case 10: player.scale = 0.12;
    break;
  case 20: player.scale = 0.14;
    break;
  case 30: player.scale = 0.16;
    break;
  case 40: player.scale = 0.18;
    break;
    default: break;
  
}
  
if(obstacleGroup.isTouching(player)){
  player.scale = 0.2;
}
  
obstacles();  
food(); 
  
  
  
  drawSprites();
  
 stroke("white");
 textSize(20);
 fill("white");
 text("score: "+ score,100,50); 
  
 score = Math.ceil(frameCount/frameRate());
}


function food(){
 if(frameCount % 80 === 0) {
    var rand = random(120,200);
    var banana = createSprite(400,rand);
    banana.velocityX = -3
    
    banana.addImage(bananaImage);
    banana.scale=0.05;
  
    banana.lifetime = 135;
    
    bananaGroup.add(banana);
  } 
  
  }

function obstacles(){
if(frameCount % 300 === 0) {
    var obstacles = createSprite(400,300,10,40);
    obstacles.velocityX = -4;
  
    obstacles.addImage(obstacleImage);
    
    
    obstacles.scale = 0.5;
    obstacles.lifetime = 135;

    obstacleGroup.add(obstacles);
  }

  
}
  
