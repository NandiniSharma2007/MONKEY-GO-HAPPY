var monkey,monkey_image,ground,banana_image,bananaGroup,stone_image;
var obstacleGroup;



function preload(){
  monkey_image=loadImage("Monkey_01.png");
  banana_image=loadImage("Banana.png");
  stone_image=loadImage("stone.png");
  
}


function setup() {
  createCanvas(800,400);
  monkey=createSprite(100,310);
  monkey.addImage(monkey_image);
  monkey.scale=0.2;
          
  ground=createSprite(100,380,1000,10);
ground.velocityX=-4;
      ground.x=ground.width/2;
  
 bananaGroup=new Group();
  obstaclesGroup=new Group();
}


function draw(){
 background(255);
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  if(keyDown("space")){
    monkey.velocityY=-2;
      
  } 
 monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground); 
  spawnBanana();
  spawnObstacles();
  survivalTime();
  drawSprites();
}
function spawnBanana () {
  if (frameCount%80===0){
   var banana=createSprite(310,250);
    banana.addImage(banana_image);
    banana.scale=0.09;
    banana.velocityX=-2;      
    banana.y=Math.round(random(150,250));
    bananaGroup.add(banana);
  banana.lifetime=200;
  }
}
function spawnObstacles (){
  if (frameCount%300===0){
    var obstacle=createSprite(320,300);
    obstacle.addImage(stone_image);
    obstacle.scale=0.09;
    obstacle.velocityX=-4;
    obstacle.y=Math.round(random(200,320));
    obstaclesGroup.add(obstacle);
  }
}
function survivalTime (){
  if (frameCount%frameRate===0);
  var survivalTime=0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.floor(frameCount/frameRate())
  text("SurvivalTime: " +survivalTime,500,60);
}