class Ground {
    constructor(x, y, width, height, red, green, blue) {
      var options = {
          isStatic: true
      };
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.colorRed = red;
      this.colorGreen = green;
      this.colorBlue = blue;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(this.colorRed, this.colorGreen, this.colorBlue);
      push();
      noStroke();
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
