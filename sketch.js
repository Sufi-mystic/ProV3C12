var garden,rabbit;
var gardenImg,rabbitImg;
var appleGroup, orangeGroup;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orange.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup = new Group();
orangeGroup = new Group();
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x = mouseX;

  createApple();
  createOrange();

  drawSprites();
}

function createApple(){
  if(frameCount%80 === 0){
    var apple = createSprite(200,0,50,50);
    apple.velocityY = 2;
    apple.addImage(appleImg);
    apple.scale = 0.2;
    var rand = Math.round(random(10,400));
    apple.x = rand;
    appleGroup.add(apple);
    apple.lifetime = 400;
  }
}

function createOrange(){
  if(frameCount%80 === 0){
    var orange = createSprite(200,0,50,50);
    orange.velocityY = 2;
    orange.addImage(orangeImg);
    orange.scale = 0.2;
    var rand = Math.round(random(5,400));
    orange.x = rand;
    orangeGroup.add(orange);
    orange.lifetime = 400;
  }
}