var rect,car;
var speed,weight;
var deform;



function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  deform=(0.5*weight*speed*speed)/22500;
  rect=createSprite(1000,200,60,height/2);
  rect.shapeColor="white";
  car=createSprite(50,200,50,50);
  car.velocityX = speed;

}

function draw() {
  background("black");  
  isTouching(car,rect);
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.shapeColor = rgb(255, 0, 0);
    ///*
    if(deform>180){
      movingRect.shapeColor = rgb(255, 0, 0);
    }else if(deform>100){
      movingRect.shapeColor = rgb(230, 230, 0);
    }else {
      movingRect.shapeColor = rgb(0, 255, 0);
    }
    console.log(deform);
    //*/
  }

  //movingRect.velocityX=0;
}
 