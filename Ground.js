class Ground {
    //constructor for ground
    constructor(x,y,width,height) {
      //makes ground static
      var options = {
          'isStatic': true
      }
      //creates ground body and adds it to world
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    //displays ground
    display(){
      var pos =this.body.position;
      //centers ground and colors it white
      rectMode(CENTER);
      fill("white");
      //creates ground as a rectangle
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
