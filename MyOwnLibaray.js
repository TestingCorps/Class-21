function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 && 
    obj2.x-obj1.x<obj1.width/2+obj2.width/2 &&
    obj1.y-obj2.y<obj1.height/2+obj2.height/2 && 
    obj2.y-obj1.y<obj1.height/2+obj2.height/2){
      obj2.shapeColor="red";
      obj1.shapeColor="red";
  }
  else{
    obj2.shapeColor="green";
    obj1.shapeColor="green";
  }
}

function bounce(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 && 
    obj2.x-obj1.x<obj1.width/2+obj2.width/2){
      obj1.velocityX *= -1;
      obj2.velocityX *= -1;
  }
  if(
    obj1.y-obj2.y<obj1.height/2+obj2.height/2 && 
    obj2.y-obj1.y<obj1.height/2+obj2.height/2){
      obj1.velocityY *= -1;
      obj2.velocityY *= -1;
  }
}

function bounceOff(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 && 
    obj2.x-obj1.x<obj1.width/2+obj2.width/2){
      obj2.velocityX *= -1;
  }
  if(
    obj1.y-obj2.y<obj1.height/2+obj2.height/2 && 
    obj2.y-obj1.y<obj1.height/2+obj2.height/2){
      obj2.velocityY *= -1;
  }
}