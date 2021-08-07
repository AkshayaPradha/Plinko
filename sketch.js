var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var l = 75; l <=width; l=l+50) { 
    plinkos.push(new Plinko(l,75));
  }

  //create 2nd row of plinko objects
  for (var l = 50; l <=width-10; l=l+50) 
  {
    plinkos.push(new Plinko(l,175));
  }

  //create 3rd row of plinko objects
  for (var l = 75; l <=width; l=l+50) { 
    plinkos.push(new Plinko(l,275));
  }

  
  //create 4th row of plinko objects
  for (var l = 50; l <=width-10; l=l+50) 
  {
    plinkos.push(new Plinko(l,375));
  }

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount
  if(frameCount%100 === 0){
    particles.push(new Particle (random(0,800),0))
  }

  //display the particles 
  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }

 
}