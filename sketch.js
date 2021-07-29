var ship,sea;
var shipImg,seaImg;
function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-3;
  sea.scale=0.3;
  
  ship=createSprite(130,200,30,30);
  ship.addAnimation("movingship",shipImg);
  ship.scale=0.3;

 
}

function draw() {
  background(0);
  sea.velocityX=-3;
  if(sea.x<0){
    sea.x=sea.width/8;
  }
 drawSprites();
}