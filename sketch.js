
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,325);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,320,1000,10);
  //ground.scale = 0.2;
  ground.velocityX = -4;
  ground.x = ground.width/2;
    
}


function draw() {
background("SKYBLUE");
  ground.shapeColor = "limegreen";
  
  if(keyDown("space") && monkey.y >= 250) {
        monkey.velocityY = -12;
    }
  
   monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x < 170){
    ground.x = ground.width/2;
  }
  
  console.log(ground.x);
  
  //monkey.debug = true;
  monkey.collide(ground);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
 
  
  food();  
  obstacles();
  drawSprites();  
  
  strokeWeight(1.3);
  stroke("black");
  textSize(20);
  textFont("Algerian");
  fill("GREEN");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : "+survivalTime,100,50);
  
}

function food(){
  if(frameCount % 80 == 0){
  banana = createSprite(500,Math.round(random(120,200)));
  banana.velocityX = -4;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.lifetime = 125;
  FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
     obstacle = createSprite(500,295);
     obstacle.addImage(obstacleImage);
     obstacle.velocityX = -5;
     obstacle.scale = 0.12;
     obstacle.lifetime = 100;
     obstacleGroup.add(obstacle);
  }
}


