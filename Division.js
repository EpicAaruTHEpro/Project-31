class Division {
    //constructor for the dividers
    constructor(x,y,width,height) {
      //makes dividers static
      var options = {
          isStatic: true
      }
      //creates body for dividers and adds it to world
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    //displays dividers
    display(){
      var pos =this.body.position;
      //centers rectangle and colors it white
      rectMode(CENTER);
      fill("white");
      //creates dividers as a rectangle
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
