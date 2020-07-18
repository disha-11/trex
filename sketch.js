var trex,ground;
var treximage;
var groundimage;
var ground2;
var cloud;
var ob1,ob2,ob3,ob4,ob5,ob6;

function preload(){
 treximage=loadAnimation("trex1.png","trex3.png","trex4.png") ;
  groundimage=loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
  ob1=loadImage("obstacle1.png");
  ob2=loadImage("obstacle2.png");
  ob3=loadImage("obstacle3.png");
  ob4=loadImage("obstacle4.png");
  ob5=loadImage("obstacle5.png");
  ob6=loadImage("obstacle6.png");
  
}
  
  
function setup() {
  createCanvas(600, 200);
  trex=createSprite(50,180,20,20)
trex.addAnimation("trex",treximage);
  trex.scale=0.7;
  
    ground=createSprite(300,180,600,5);
  ground.addImage("ground",groundimage)
  ground.velocityX=-6;
  
  ground2=createSprite(300,185,600,5);
  
  
  
}

function draw() {
  background(180);
  
  trex.collide(ground2);
  
  if(keyDown("space")){
    trex.velocityY=-5;
  }
  trex.velocityY=trex.velocityY+0.5;
  
  ground2.visible=false;
  
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  spawnclouds();
  
  spawnObstacles();
  
  drawSprites();
}

function spawnclouds(){
  
  
  if(frameCount%60===0){
  cloud=createSprite(600,random(20,120),20,20);
  cloud.addImage("cloud",cloudimage);
    cloud.scale=0.6;
    trex.depth=cloud.depth;
    trex.depth=trex.depth+1;
    cloud.velocityX=-2;
}
}
  
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
    console.log(rand);
    switch(rand){
      case 1:obstacle.addImage("ob",ob1);
        break;
        case 2:obstacle.addImage("ob1",ob2);
    break;
    case 3:obstacle.addImage("ob3",ob3);
        break;
          case 4:obstacle.addImage("ob4",ob4);
        break;
          case 5:obstacle.addImage("ob5",ob5);
        break;
          case 6:obstacle.addImage("ob6",ob6);
        break;
        default:
        break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
  }
}




