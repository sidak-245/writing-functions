var movingRect, fixedRect,result,rect2,rect1;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  rect1 = createSprite (300,100,20,20) 
  rect2 = createSprite (50,100,20,20) 
  rect1.velocityX = -1
  rect2.velocityX= 2
  movingRect = createSprite(200, 200, 50, 80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y =mouseY;

  bounceoff(rect1,rect2);
  result = istouching(movingRect,fixedRect)
  console.log(result)
  
  drawSprites();
}
function istouching(object1,object2){
if(object1.x - object2.x <= object1.width/2 + object2.width/2
  && object2.x - object1.x <= object1.width/2 + object2.width/2
  &&object2.y-object1.y<=object1.height/2+object2.height/2 
  && object1.y-object2.y<=object1.height/2+object2.height/2){
  return true ;
}else{
  return false;
}
}
function bounceoff(object1,object2){  

  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2) {
      object2.velocityX =  object2.velocityX * (-1);
      object1.velocityX = object1.velocityX * (-1);
}
if ( object2.y - object1.y < object1.height/2 +  object2.height/2
  &&object1.y -  object2.y <object1.height/2 + object2.height/2){
    object2.velocityY =  object2.velocityY * (-1);
    object1.velocityY = object1.velocityY * (-1);
}

}