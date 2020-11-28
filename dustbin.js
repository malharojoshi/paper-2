class Dustbin {
  constructor(x, y) {
    var options = {
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.rectangle(x, y, 200, 200, options);
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.body);
    this.width = 200;
    this.height = 200;
  }
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
