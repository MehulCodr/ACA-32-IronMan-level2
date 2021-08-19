var ironMan, spikes, stones, restart, diamond;
var bg, backgroundImg;
var brick, brickImg, brickGroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  Ironman = loadImage("images/iron.png");
  brickImg = loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  bg.velocityX = -6;

  ironMan=createSprite(100,495,20,50);
  ironMan.addImage(Ironman);
  ironMan.scale=0.5;
  ironMan.debug = false;
  ironMan.setCollider("rectangle",100,0,200,400);
  brickGroup=new Group();
  ground = createSprite(200,585,400,10); 
  ground.visible = false;
 }

function draw() {
  if (bg.x < 200){
    bg.x=bg.width/4;
  } 
  if(keyDown("up")){
    ironMan.velocityY=-10;
  }
  if(keyDown("left")){
    ironMan.x=ironMan.x -5;
  }
  if(keyDown("right")){
    ironMan.x=ironMan.x +5;
  }
  generateStones();
  ironMan.velocityY=ironMan.velocityY+0.5;

  for (var i = 0; i < (brickGroup.length); i++) {
    var temp = brickGroup.get(i);
    if (temp.isTouching(ironman)) {
      ironMan.collide(temp);
    } 
  }
  ironman.collide(ground);
    drawSprites();
   
}

function generateStones(){
  if (frameCount%70 === 0) {
    var brick = createSprite(800,200,50,15);
    brick.x  = random(50,450);
    brick.addImage(brickImg);
    brick.scale = 0.5;
    brick.velocityY = +5;
    brick.lifetime =250;
    brickGroup.add(brick);

  }
}