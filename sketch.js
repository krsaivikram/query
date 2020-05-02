const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bg;
var redblock,yellow,blue,black,yellow2,blue2,black2;
var ghg;
var points =0;
var b;
function preload(){
  bg = loadImage("sprites/bg5.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight-113);
   
  engine = Engine.create();
    world = engine.world;
 box = new Block(1050,290,100,300);
   arrow1 = new Arrow(200+100,510,PI/2);
 string = new Bow(arrow1.body,{x:200+100,y:436});
 redblock = createSprite(1000+100,540-100,5,25);
 redblock.shapeColor="green";
 yellow = createSprite(1000+100,510-100+5,5,30-5);
yellow.shapeColor = "yellow";
 yellow2 = createSprite(1000+100,570-100-5,5,30-5);
 yellow2.shapeColor = "yellow";
 blue = createSprite(1000+100,480-100+10,5,30-5);
 blue.shapeColor = "red";
 blue2 = createSprite(1000+100,600-100-10,5,30-5);
 blue2.shapeColor = "red";
 black= createSprite(1000+100,630-100-20,5,30-5);
 black.shapeColor = "blue";
 black2 = createSprite(1000+100,450-100+20,5,30-5);
 black2.shapeColor = "blue";
 grey = createSprite(1000+100,450-100-6,5,30-5);
 grey2 = createSprite(1000+100,450-100+185,5,30-5);
 ghg =new Brick(displayWidth,displayHeight/2,10,displayHeight);
//b=new Brick(1000,440,3,210);

 /*fill("red");
 red = new Brick(1000,540,10,30);
 fill("yellow");
 yellowu = new Brick(1000,500,10,30);
 //fill("yellow");
 yellowb = new Brick(1000,570,10,30);
 fill("blue");
 blueu = new Brick(1000,480,10,30);
 fill("blue");
 blueb = new Brick(1000,600,10,30);
 //fill("black");
 blacku = new Brick(1000,630,10,30);
 //fill("black");
 blackb = new Brick(1000,450,10,30);*/
 
}

function draw() {
  background(bg);  
  Engine.update(engine);
 if(arrow1.body.isTouching(redblock)){
   Matter.Body.setPosition(arrow1.body,{x:995,y:555});
  }
box.display();
//b.display();
textSize(15);
textStyle(ITALIC);
fill("green");
text("50 points",1010+200,545-100);
fill("cream");
text("30 points",1010+200,515-100);
fill("cream");
text("30 points",1010+200,575-100);
fill("red");
text("20 points",1010+200,485-100);
fill("red");
text("20 points",1010+200,605-100);
fill("blue");
text("10 points",1010+200,635-100);
fill("blue");
text("10 points",1010+200,455-100);
fill("green");
textSize(50);
textStyle(ITALIC);
text("HIT THE TARGET",500,100);
textSize(20);
fill(155,10,101);
text("SCORE = "+points,900,200);
string.display();
arrow1.display();

ghg.display();
drawSprites();

}



function mouseDragged(){
  
  Matter.Body.setPosition(arrow1.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
  string.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(arrow1.body,{x:300,y:510});
       string.attach(arrow1.body);
       Matter.Body.setAngle(arrow1.body,PI/2);
  }
}