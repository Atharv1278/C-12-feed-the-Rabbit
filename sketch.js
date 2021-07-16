var garden,rabbit;
var gardenImg,rabbitImg;
var apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png")
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
  
  apple=createSprite(200,160,30,30);
  apple.addImage(appleImg);
  apple.scale=0.09;
  
  var AA =  Math.round(random(1,100))
    console.log(AA)
}
  
 

rabbit.x=World.mouseX



function draw() {
  background(0);
  
 
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnapples()

  drawSprites();
}

  function spawnapples(){
    if(frameCount%80==0){
      if (apple==1)
      apple=createSprite(600,100,40,10);
      apple.velocityY=3;
      apple.addImage("apple",appleImg);
      apple.scale=0.09
      apple.y=random(50,120)
      apple.depth=rabbit.depth;
      rabbit.depth+=1
    }
      
    
  }
