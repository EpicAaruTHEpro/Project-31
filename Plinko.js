class Plinko {
    //constructs the plinkos
    constructor(x,y) {
      //makes plinkos static
      var options = {
          isStatic: true
      }
      //creates plinkos' body and adds it to world 
      this.body = Bodies.circle(x,y,10,options);
      World.add(world, this.body);
    }
    //displays plinkos
    display(){
      var pos =this.body.position;
      //centers the ellipse and colors it white
      ellipseMode(RADIUS);
      fill("white");
      //creates the plinkos as an ellipse
      ellipse(pos.x, pos.y, 10);
    }
  }
