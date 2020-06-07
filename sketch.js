var sun, kepler13a, kepler13b;

function setup(){
  createCanvas(1365,625);

  sun = createSprite(682.5,312.5,75,75);
  kepler13a = createSprite(682.5,162.5,50,50);
  kepler13b = createSprite(682.5,512.5,50,50);

  sun.shapeColor = "yellow";
  kepler13a.shapeColor = "red";
  kepler13b.shapeColor = "blue";

  sun.setCollider("circle",0,0,50);
}

function draw() {
  background("black"); 
  
  if(World.frameCount%60 === 0){
    sun.width = sun.width + 25;
    sun.height = sun.height + 25;
  }

  if(collide(kepler13a,sun)){
    kepler13a.destroy();
  }

  if(collide(kepler13b,sun)){
    kepler13b.destroy();
  }

  if(sun.width > 1000){
    back.shapeColor = "yellow";
  }

 
  drawSprites();
}

function collide(object1,object2){ 
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2){ 
    return true;
  }
  else { 
    return false;
  }
}
