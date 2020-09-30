const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
//creates the array for creating the particles
var particles = [];
//creates the array for creating the plinkos
var plinkos = [];
//creates the array for creating the dividers and creates a divsion height variable
var divisions = [];
var divisionHeight = 300;

function setup() {
  //creates the canvas 
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //creates the ground
  ground = new Ground(240,800,480,20);
  Engine.run(engine);

}

function draw() {
  //sets background to black
  background(0);
  //displays ground
  ground.display();
  //for loop to create the dividers
  for (var k = 0; k<=width; k+=80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  //for loop to display the dividers
  for (var k = 0; k<divisions.length; k++) {
    divisions[k].display();
  }

  //for loop to create all the rows of the plinkos
  for (var j = 40; j<=width; j+=50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j<=width-10; j+=50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j<=width; j+=50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j<=width-10; j+=50){
    plinkos.push(new Plinko(j,375));
  }

  //for loop for displaying all the rows of the plinkos
  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }

  //creates a particle every 60 frames
  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10,width/2+10), 10, 10));
  }

  //displays the particles
  for (var j = 0; j<particles.length; j++) {
    particles[j].display();
  }
}