
var box1, box2, box3, box4;
var ball;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    ball=createSprite(random(10,750),300,20,20);
    ball.shapeColor="white";
    ball.velocityX=3;
    ball.velocityY=3;

   
    box1=createSprite(100,580,180,30);
    box1.shapeColor="red";

    box2=createSprite(300,580,180,30);
    box2.shapeColor="green";

    box3=createSprite(500,580,180,30);
    box3.shapeColor="blue";

    box4=createSprite(700,580,180,30);
    box4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10))
   
    if(ball.x<0){
      music.stop()
        ball.velocityX=3
    }else if(ball.x>800){
      music.stop()
        ball.velocityX=-3
    }
   
  if(ball.isTouching(box4)){
    music.play()
    ball.shapeColor="yellow";
    ball.bounceOff(box4);
    
  }
  
  else if(ball.isTouching(box3)){
    music.stop()
    ball.shapeColor="blue";
    bounceOff(ball,box3)
   
  }
    
  else if(ball.isTouching(box2)){
    music.stop()
    ball.shapeColor="green";
    bounceOff(ball,box2)
    ball.velocityX=0;
    ball.velocityY=0;
  }
  
  else if(ball.isTouching(box1)){
    music.stop()
    ball.shapeColor="red";
    ball.bounceOff(box1)
  }

  if (ball.y<0){
    music.stop()
    ball.velocityY=3
  }

  
   
    drawSprites()
}
function isTouching(object1,object2)
{

  if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2&&object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
   return true;  
  }
  else{
    return false;
  }
}

function bounceOff(object1,object2){


if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2){
object1.velocityX=object1.velocityX*-1
object2.velocityX=object2.velocityX*-1
}
if(object1.y-object2.y<object1.height/2+object2.height/2&&object2.y-object1.y<object1.height/2+object2.height/2){
  object1.velocityY=object1.velocityY*-1
object2.velocityY=object2.velocityY*-1
}
if(object1.x<0){
    object1.velocityX=3
  }
  else if(object2.x>1200){
    object2.velocityX=-3
  }
}
