const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(450,390,900,20);
  stand1 = new ground(390,300,250,10);
  stand2 = new ground(700,200,200,10);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball)
  
  chain = new slingshot(this.ball,{x:100,y:200})

    block1 = new block(300,275,30,40); 
    console.log(block1); 
    block2 = new block(330,275,30,40); 
    block3 = new block(360,275,30,40);
    block4 = new block(390,275,30,40);
    block5 = new block(420,275,30,40);
    block6 = new block(450,275,30,40);
    block7 = new block(480,275,30,40);
    block8 = new block(330,235,30,40);
    block9 = new block(360,235,30,40);
    block10 = new block(390,235,30,40);
    block11 = new block(420,235,30,40);
    block12 = new block(450,235,30,40);
    block13 = new block(360,195,30,40);
    block14 = new block(390,195,30,40); 
    block15 = new block(420,195,30,40); 
    block16 = new block(390,155,30,40); 
    blocks1 = new block(640,175,30,40);
    blocks2 = new block(670,175,30,40); 
    blocks3 = new block(700,175,30,40); 
    blocks4 = new block(730,175,30,40); 
    blocks5 = new block(760,175,30,40); 
    blocks6 = new block(670,135,30,40);
    blocks7 = new block(700,135,30,40); 
    blocks8 = new block(730,135,30,40); 
    blocks9 = new block(700,95,30,40);
}

function draw() {
  background("yellow");  
  Engine.update(engine);

  ground1.display();
  stand1.display();
  stand2.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  chain.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  blocks1.display();  
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();

  drawSprites();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
     chain.attach(this.ball);
     
  }
}