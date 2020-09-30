class Particle {
    //constructor for the particles
    constructor(x,y,radius) {
      //makes restitution 0.1
      var options = {
          'restitution': 0.1
      }
      //creates particles' body, colors it randomly, and adds it to world
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    //displays particles
    display(){
      //creates body properties
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //gives color and centers ellipse
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      //creates the particle as an ellipse
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }
