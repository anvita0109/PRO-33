
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var turn = 0;
var divisionHeight=300;
var score =0;

var gameState = "start";

function setup() {

  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  console.log(gameState);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


  for (var j = 75; j <=width; j=j+50) 
   {
     plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 



function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  text("500", 25, 550);
  text("500",105, 550);
  text("500",185, 550);
  text("500",265, 550);

  text("100",340, 550);
  text("100",420, 550);
  text("100",500, 550);

  text("200",580, 550);
  text("200",660, 550);
  text("200",740, 550);


  Engine.update(engine);

  ground.display();

  if (gameState === "end"){
    textSize(50);
    text("Game Over", 200, 250);
  }
 
  //line(0, 600, 800, 600);
  //fill("yellow");
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/


  if(particle !== null){

    particle.display();
  
    if(particle.body.position.y > 760){
  
      if (particle.body.position.x < 300){
  
        score = score+500;
        particle = null;
        if (turn >= 5){
          gameState = "end";
        }
      }
      else if(particle.body.position.x < 600 && particle.body.position.x > 301){
          
        score = score+100;
        particle = null;
        if (turn >= 5){
          gameState = "end";
        }
      }
      else if(particle.body.position.x < 900 && particle.body.position.x > 601){
        score = score+200;
        particle = null;
        if (turn >= 5){
          gameState = "end";
        }
      }
      
    }
    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
  
  
    }
  }

  function mousePressed(){

    if(gameState !== "end"){

      turn++;
      particle = new Particle(mouseX, 10, 10, 10);
    }
  
  }  
 
}