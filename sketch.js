var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudImage;
var obstacle,ob1Image,ob2Image,ob3Image,ob4Image,ob5Image,ob6Image;
var score = 0;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  ob1Image = loadImage("obstacle1.png");
  ob2Image = loadImage("obstacle2.png");
  ob3Image = loadImage("obstacle3.png");
  ob4Image = loadImage("obstacle4.png");
  ob5Image = loadImage("obstacle5.png");
  ob6Image = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(800, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
   score = Math.round(World.frameCount/4);
  text("Score: "+ score, 300, 50);
 
  
  trex.collide(invisibleGround);
  drawSprites();
  spawnClouds();
  spawnObstacles();
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(600,160,10,40);
    obstacle.velocityX = -6;
    var rand =Math.round( random(1,6));
    switch(rand) {  
      case 1: obstacle.addImage(ob1Image);
        break;
    case 2: obstacle.addImage(ob2Image);
        break;
    case 3: obstacle.addImage(ob3Image);
        break;
    case 4: obstacle.addImage(ob4Image);
        break;
    case 5: obstacle.addImage(ob5Image);
        break;
    case 6: obstacle.addImage(ob6Image);
        break;
        default: break;
    }
    
  
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(600,150,40,10);
    cloud.y = random(100,150);
    cloud.addImage("cloud.png",cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}
